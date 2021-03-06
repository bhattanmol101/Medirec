class Contract{
    constructor(){
        this.state = {
            nonce : 1,
        }
        this.Tx = require('ethereumjs-tx')
        const Web3 = require('web3')
        this.web3 = new Web3('https://ropsten.infura.io/v3/72ab67ed4d994462b40057a6c0222687')

        this.account = '0xb89F76721600B330Cc5039b97d50d864015Bad69'
        this.privateKey = Buffer.from('096c43cc1851c1f2a89407ef12c893db2faa528700f0a6da9ac351e79b717339','hex')
        this.contractAddress = '0x38C1B5c9Bd30280a0e765823f59767F049bAA43A'
        this.contractABI = [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "doctorMap", "outputs": [ { "name": "docID", "type": "uint256" }, { "name": "docName", "type": "string" }, { "name": "docProf", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_policyNo", "type": "uint256" }, { "name": "_patientID", "type": "uint256" }, { "name": "_docID", "type": "uint256" }, { "name": "_amount", "type": "uint256" } ], "name": "addInsurance", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "patientMap", "outputs": [ { "name": "patientID", "type": "uint256" }, { "name": "disease", "type": "string" }, { "name": "bg", "type": "string" }, { "name": "weight", "type": "uint256" }, { "name": "height", "type": "uint256" }, { "name": "age", "type": "uint256" }, { "name": "docID", "type": "uint256" }, { "name": "policyNo", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_disease", "type": "string" }, { "name": "_bg", "type": "string" }, { "name": "_weight", "type": "uint256" }, { "name": "_height", "type": "uint256" }, { "name": "_age", "type": "uint256" }, { "name": "_docID", "type": "uint256" }, { "name": "_policyNo", "type": "uint256" } ], "name": "addPatient", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "insMap", "outputs": [ { "name": "insID", "type": "uint256" }, { "name": "policyNo", "type": "uint256" }, { "name": "patientID", "type": "uint256" }, { "name": "docID", "type": "uint256" }, { "name": "amount", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_insID", "type": "uint256" }, { "name": "_amount", "type": "uint256" } ], "name": "updateInsurance", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_prof", "type": "string" } ], "name": "addDoc", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "docCount", "type": "uint256" } ], "name": "docEvent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "patCount", "type": "uint256" } ], "name": "patientEvent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "insCount", "type": "uint256" } ], "name": "insEvent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "amt", "type": "uint256" } ], "name": "updateInsEvent", "type": "event" } ]
        this.contract = new this.web3.eth.Contract(this.contractABI, this.contractAddress)
        this.web3.eth.getTransactionReceiptMined= function getTransactionReceiptMined(txHash, interval) {
            const self = this;
            const transactionReceiptAsync = function(resolve, reject) {
                self.getTransactionReceipt(txHash, (error, receipt) => {
                    if (error) {
                        reject(error);
                    } else if (receipt == null) {
                        setTimeout(
                            () => transactionReceiptAsync(resolve, reject),
                            interval ? interval : 500);
                    } else {
                        resolve(receipt);
                    }
                });
            };
        
            if (Array.isArray(txHash)) {
                return Promise.all(txHash.map(
                    oneTxHash => self.getTransactionReceiptMined(oneTxHash, interval)));
            } else if (typeof txHash === "string") {
                return new Promise(transactionReceiptAsync);
            } else {
                throw new Error("Invalid Type: " + txHash);
            }
        };
    }
}

export default Contract