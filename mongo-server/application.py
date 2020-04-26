from flask import Flask, jsonify
from flask import request
from time import gmtime, strftime
import json

import mongoDBhelper as mongoHelp

# oauthToken = "sampleOauth5"
app = Flask(__name__)

# args: oauthtoken
@app.route('/login', methods=['POST'])
def createNewUser():
    #check to see if account from oauthToken is already created
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]

    msg = mongoHelp.login(oauthToken)

    return jsonify({ "status" : msg }), 201

#web3py contract calls
# args: oauthtoken, qrhash
@app.route('/createItem', methods=['POST'])
def createItem():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    qrHash = oauthJson["qrhash"]
    # mnemonic = logIn(oauthToken)
    msg, statusCode = mongoHelp.createItem(oauthToken, qrHash)

    if statusCode == 403:
        return jsonify({ "status" : msg}), statusCode

    return jsonify({
        'status': msg,
        'transactionId': str(qrHash),
        'timeCreated' : strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
    }), statusCode


# args: oauthtoken
@app.route('/getHistory', methods=['POST'])
def getHistory():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    txs = mongoHelp.getHistory(oauthToken)

    return jsonify({ 'transactions': txs }), 200


@app.route('/getBalance', methods=['POST'])
def getBalance():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    balance = mongoHelp.getBalance(oauthToken)
    return jsonify({ 'balance': balance}), 200


@app.route('/validateItem', methods=['POST'])
def validateItem():
    oauthJson = request.get_json()
    oauthToken = oauthJson["oauthtoken"]
    qrHash = oauthJson["qrhash"]

    msg, statusCode = mongoHelp.validateItem(qrHash, 1)

    return jsonify({ 'status': msg }), statusCode

@app.route("/")
def home():
    return "Hello, World!"

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run(host = '0.0.0.0', port = 5000)
