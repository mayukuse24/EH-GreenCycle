from time import gmtime, strftime
import json

from flask import Flask, jsonify
from flask import request
import pymongo
from pymongo import MongoClient
from pywallet import wallet
from web3 import Web3, HTTPProvider
import mongoDBhelper as mongoHelp

# import config


#w["xprivate_key"] is the private key for the created wallet
mongoUrl = "mongodb+srv://{user}:{password}@{server}/test?retryWrites=true&w=majority".format(
                user=config.MONGO_USER, password=config.MONGO_PASSWORD, server=config.MONGO_SERVER
            )


ABI = json.load(open("Validator.json", "r"))['abi']

# oauthToken = "sampleOauth5"
app = Flask(__name__)

# args: oauthtoken
@app.route('/login', methods=['POST'])
def createNewUser():
    #check to see if account from oauthToken is already created
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    return mongoHelp.login(oauthToken)


#web3py contract calls
# args: oauthtoken, qrhash
@app.route('/createItem', methods=['POST'])
def createItem():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    qrHash = oauthJson["qrhash"]
    # mnemonic = logIn(oauthToken)
    return mongoHelp.createItem(oauthToken, qrHash)


# args: oauthtoken
@app.route('/getHistory', methods=['POST'])
def getHistory():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    return mongoHelp.getHistory(oauthToken)


# need to switch to mongoDB
@app.route('/getBalance', methods=['POST'])
def getBalance():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    return mongoHelp.getBalance(oauthToken)


@app.route('/validateItem', methods=['POST'])
def validateItem():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    qrHash = oauthJson["qrhash"]
    return mongoHelp.validateItem(qrhash, 1)

@app.route("/")
def home():
    return "Hello, World!"

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
