from pymongo import MongoClient
from time import gmtime, strftime

mongoUrl = "mongodb+srv://user:password12345@cluster0-3s8ia.gcp.mongodb.net/test?retryWrites=true&w=majority"
cluster = MongoClient(mongoUrl)
db = cluster["GreenBlock"]
userDatabase = db["UserInfo"]
transactionDatabase = db["transactionHistory"]

def createNewUser(oauthToken):
    post = {
            "_id" : userDatabase.count_documents({}) + 1 ,
            "OAuth": oauthToken,
            "balance" : 0,
            "status" : "User"
            }
    userDatabase.insert_one(post)

def login(oauthToken):
    try:
        user = userDatabase.find({"OAuth" : oauthToken})[0]
        return "User logged in"
    except IndexError:
        createNewUser(oauthToken)
        return "User created"


def changeUserBalance(oauthToken, changeVal):
    user = userDatabase.find({"OAuth" : oauthToken})[0]
    prevBal = user["balance"]
    userDatabase.update_one({
      '_id': user["_id"]
    },{
      '$set': {
        'balance': prevBal + changeVal
      }
    }, upsert=False)
    return "user balance changed by " + str(changeVal)

def getBalance(oauthToken):
    user = userDatabase.find({"OAuth" : oauthToken})[0]
    if user["balance"] == "":
        return 0
    else:
        return str(user["balance"])

def getHistory(oauthToken):
    transArr = []
    userHist = transactionDatabase.find({"OAuth" : oauthToken})

    for trans in userHist:
        trans.pop('OAuth', None) # Remove Oauth token from response
        transArr.append(trans)
    
    return transArr

def createItem(oauthToken, qrhash):
    try:
        trans = transactionDatabase.find({"qrhash" : qrhash})[0]
        return "Item already exists", 403
    except IndexError:
        post = {
            "_id" : transactionDatabase.count_documents({}) + 1 ,
            "OAuth": oauthToken,
            "qrhash": qrhash,
            "time" : strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime()),
            "status" : "unvalidated"
        }
        transactionDatabase.insert_one(post)
        return "Item created", 201


def validateItem(qrhash, value):
    try:
        trans = transactionDatabase.find({"qrhash" : qrhash})[0]
        if trans['status'] == "validated":
            # bottle has already bene validated
            return "Item already validated", 403
        else:
            transactionDatabase.update_one({
              '_id': trans["_id"]
            },{
              '$set': {
                'status': "validated"
              }
            }, upsert=False)
            changeUserBalance(trans["OAuth"], value)
            return "Item has been validated", 200
    except IndexError:
        return "Item does not exist", 404
