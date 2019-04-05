import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import swal from 'sweetalert'
import '../css/style.css'
import Home from './Home'
import Navbar from './Navbar'
import Doctor from './Doctor'
import Patient from './Patient'
import Insurance from './Insurance'
import Contract from '../Contract/Contract'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DID: 0,
            Dname: "ad",
            Dprof: "df",
            PID: 0,
            Pdisease: "",
            Pweight: 0,
            Pheight: 0,
            Pbg: "",
            Page: 0,
            PdocID: 0,
            PpolicyID: 0,
            IUID: 0,
            IpolicyNo: 0,
            IpID: 0,
            IdocID: 0,
            Iamount: 0,
            txHash: ""
        }
        this.contract = new Contract()
        this.addDoctor = this.addDoctor.bind(this)
        this.getDoctor = this.getDoctor.bind(this)
        this.addPatient = this.addPatient.bind(this)
        this.getPatient = this.getPatient.bind(this)
        this.addInsurance = this.addInsurance.bind(this)
        this.getInsurance = this.getInsurance.bind(this)
        this.claimInsurance = this.claimInsurance.bind(this)
    }

    async addDoctor(name, prof) {
        document.getElementById('loading').style.display = 'block';
        await this.contract.web3.eth.getTransactionCount(this.contract.account).then((res) => {
            this.contract.state.nonce = res;
        })
        this.setState({ Dname: name })
        this.setState({ Dprof: prof })
        const data = this.contract.contract.methods.addDoc(name, prof).encodeABI()

        const txObject = {
            nonce: this.contract.state.nonce,
            gasLimit: this.contract.web3.utils.toHex(8000000),
            gasPrice: this.contract.web3.utils.toHex(this.contract.web3.utils.toWei('10', 'gwei')),
            to: this.contract.contractAddress,
            data: data
        }
        const tx = new this.contract.Tx(txObject)
        tx.sign(this.contract.privateKey)

        const serialize = tx.serialize()
        const raw = '0x' + serialize.toString('hex')
        await this.contract.web3.eth.sendSignedTransaction(raw, async (err, txHash) => {
            console.log(err, txHash)
            this.setState({ txHash: txHash })
            this.contract.state.txHash = txHash
            await this.contract.web3.eth.getTransactionReceiptMined(this.contract.state.txHash).then((res) => {
                console.log(res)
                this.setState({ DID: 'D'+parseInt(res.logs[0].data) })
            })
            swal("Doctor Added!", "Transaction has been sucessfully mined!", "success");
            document.getElementById('loading').style.display = 'none';
        })
    }

    async getDoctor(num) {
        document.getElementById('loadingF').style.display = 'block';
        await this.contract.contract.methods.doctorMap(num).call().then((res) => {
            if (parseInt(res[0]) === 0) {
                swal("Error!", "Invalid Doctor ID!", "error");
                this.setState({ DID: 'NA' })
                this.setState({ Dname: "NA" })
                this.setState({ Dprof: "NA" })
            }
            else {
                this.setState({ DID: 'D'+parseInt(res[0]) })
                this.setState({ Dname: res[1] })
                this.setState({ Dprof: res[2] })
            }
        })
        document.getElementById('loadingF').style.display = 'none';
    }

    async addPatient(disease, bg, weight, height, age, docid, pnum) {
        document.getElementById('loading').style.display = 'block';
        await this.contract.web3.eth.getTransactionCount(this.contract.account).then((res) => {
            this.contract.state.nonce = res;
        })
        this.setState({ Pdisease: disease })
        this.setState({ Pbg: bg })
        this.setState({ Page: age })
        this.setState({ Pweight: weight })
        this.setState({ Pheight: height })
        this.setState({ PdocID: docid })
        this.setState({ PpolicyID: pnum })
        const data = this.contract.contract.methods.addPatient(disease, bg, weight, height, age, docid, pnum).encodeABI()

        const txObject = {
            nonce: this.contract.state.nonce,
            gasLimit: this.contract.web3.utils.toHex(8000000),
            gasPrice: this.contract.web3.utils.toHex(this.contract.web3.utils.toWei('10', 'gwei')),
            to: this.contract.contractAddress,
            data: data
        }
        const tx = new this.contract.Tx(txObject)
        tx.sign(this.contract.privateKey)

        const serialize = tx.serialize()
        const raw = '0x' + serialize.toString('hex')
        await this.contract.web3.eth.sendSignedTransaction(raw, async (err, txHash) => {
            console.log(err, txHash)
            this.setState({ txHash: txHash })
            this.contract.state.txHash = txHash
            await this.contract.web3.eth.getTransactionReceiptMined(this.contract.state.txHash).then((res) => {
                console.log(res)
                this.setState({ PID: parseInt(res.logs[0].data) })
            })
            swal("Patient Added!", "Transaction has been sucessfully mined!", "success");
            document.getElementById('loading').style.display = 'none';
        })
    }

    async getPatient(num) {
        document.getElementById('loadingF').style.display = 'block';
        await this.contract.contract.methods.patientMap(num).call().then((res) => {
            if (parseInt(res[0]) === 0) {
                swal("Error!", "Invalid Patient ID!", "error");
                this.setState({ PID: "NA" })
                this.setState({ Pdisease: 'NA' })
                this.setState({ Pbg: 'NA' })
                this.setState({ Page: 'NA' })
                this.setState({ Pweight: 'NA' })
                this.setState({ Pheight: 'NA' })
                this.setState({ PdocID: 'NA' })
                this.setState({ PpolicyID: 'NA' })
            }
            else {
                this.setState({ PID: parseInt(res[0]) })
                this.setState({ Pdisease: res[1] })
                this.setState({ Pbg: res[2] })
                this.setState({ Pweight: parseInt(res[3]) })
                this.setState({ Pheight: parseInt(res[4]) })
                this.setState({ Page: parseInt(res[5]) })
                this.setState({ PdocID: parseInt(res[6]) })
                this.setState({ PpolicyID: parseInt(res[7]) })
            }
        })
        document.getElementById('loadingF').style.display = 'none';
    }

    async addInsurance(pnu, pid, docId, amt) {
        document.getElementById('loading').style.display = 'block';
        await this.contract.web3.eth.getTransactionCount(this.contract.account).then((res) => {
            this.contract.state.nonce = res;
        })
        this.setState({ IdocID: docId })
        this.setState({ IpID: pid })
        this.setState({ IpolicyNo: pnu })
        this.setState({ Iamount: amt })

        const data = this.contract.contract.methods.addInsurance(pnu, pid, docId, amt).encodeABI()

        const txObject = {
            nonce: this.contract.state.nonce,
            gasLimit: this.contract.web3.utils.toHex(8000000),
            gasPrice: this.contract.web3.utils.toHex(this.contract.web3.utils.toWei('10', 'gwei')),
            to: this.contract.contractAddress,
            data: data
        }
        const tx = new this.contract.Tx(txObject)
        tx.sign(this.contract.privateKey)

        const serialize = tx.serialize()
        const raw = '0x' + serialize.toString('hex')
        await this.contract.web3.eth.sendSignedTransaction(raw, async (err, txHash) => {
            console.log(err, txHash)
            this.setState({ txHash: txHash })
            this.contract.state.txHash = txHash
            await this.contract.web3.eth.getTransactionReceiptMined(this.contract.state.txHash).then((res) => {
                console.log(res)
                this.setState({ IUID: parseInt(res.logs[0].data) })
            })
            swal("Insurance Added!", "Transaction has been sucessfully mined!", "success");
            document.getElementById('loading').style.display = 'none';
        })
    }

    async getInsurance(iuid, pid, did) {
        document.getElementById('loadingF').style.display = 'block';
        await this.contract.contract.methods.insMap(iuid).call().then((res) => {
            if (parseInt(res[0]) === 0) {
                swal("Error!", "Invalid Insurance ID!", "error");
                this.setState({ IUID: 'NA' })
                this.setState({ IdocID: 'NA' })
                this.setState({ IpID: 'NA' })
                this.setState({ IpolicyNo: 'NA' })
                this.setState({ Iamount: 'NA' })
            }
            else {
                if (parseInt(iuid) === parseInt(res[0]) && parseInt(pid) === parseInt(res[2]) && parseInt(did) === parseInt(res[3])) {
                    this.setState({ IUID: parseInt(res[0]) })
                    this.setState({ IdocID: parseInt(res[3]) })
                    this.setState({ IpID: parseInt(res[2]) })
                    this.setState({ IpolicyNo: parseInt(res[1]) })
                    this.setState({ Iamount: parseInt(res[4]) })
                }
                else {
                    swal("Error!", "Couldn't find the given Insurance!", "error");
                    this.setState({ IUID: 'NA' })
                    this.setState({ IdocID: 'NA' })
                    this.setState({ IpID: 'NA' })
                    this.setState({ IpolicyNo: 'NA' })
                    this.setState({ Iamount: 'NA' })
                }
            }
        })
        document.getElementById('loadingF').style.display = 'none';
    }

    async claimInsurance(iuid, pid, did, amt) {
        document.getElementById('loading').style.display = 'block';
        await this.contract.contract.methods.insMap(iuid).call().then( async (res) => {
            if (parseInt(iuid) === parseInt(res[0]) && parseInt(pid) === parseInt(res[2]) && parseInt(did) === parseInt(res[3])) {
                this.setState({ IUID: parseInt(res[0]) })
                this.setState({ IdocID: parseInt(res[3]) })
                this.setState({ IpID: parseInt(res[2]) })
                this.setState({ IpolicyNo: parseInt(res[1]) })
                
                await this.contract.web3.eth.getTransactionCount(this.contract.account).then((res) => {
                    this.contract.state.nonce = res;
                })

                const data = this.contract.contract.methods.updateInsurance(iuid, amt).encodeABI()

                const txObject = {
                    nonce: this.contract.state.nonce,
                    gasLimit: this.contract.web3.utils.toHex(8000000),
                    gasPrice: this.contract.web3.utils.toHex(this.contract.web3.utils.toWei('10', 'gwei')),
                    to: this.contract.contractAddress,
                    data: data
                }
                const tx = new this.contract.Tx(txObject)
                tx.sign(this.contract.privateKey)

                const serialize = tx.serialize()
                const raw = '0x' + serialize.toString('hex')
                await this.contract.web3.eth.sendSignedTransaction(raw, async (err, txHash) => {
                    console.log(err, txHash)
                    this.setState({ txHash: txHash })
                    this.contract.state.txHash = txHash
                    await this.contract.web3.eth.getTransactionReceiptMined(this.contract.state.txHash).then((res) => {
                        console.log(res)
                        this.setState({Iamount : parseInt(res.logs[0].data) })
                    })
                    swal("Insurance Updated!", "Transaction has been sucessfully mined!", "success");
                    document.getElementById('loading').style.display = 'none';
                })
            }
            else{
                this.setState({ IUID: 'NA' })
                this.setState({ IdocID: 'NA' })
                this.setState({ IpID: 'NA' })
                this.setState({ IpolicyNo: 'NA' })
                this.setState({ Iamount: 'NA' })
                swal("Error!", "Couldn't find the given Insurance!", "error");
                document.getElementById('loading').style.display = 'none';
            }
        })

    }

    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" render={props =>
                        <div>
                            <Navbar active="home" />
                            <Home />
                        </div>
                    } />
                    <Route exact path="/Doctor" render={props =>
                        <div>
                            <Navbar active="doctor" />
                            <Doctor uid={this.state.DID} name={this.state.Dname} prof={this.state.Dprof} addDoc={this.addDoctor} getDoc={this.getDoctor} dTx={this.state.txHash} />
                        </div>
                    } />
                    <Route exact path="/Patient" render={props =>
                        <div>
                            <Navbar active="patient" />
                            <Patient pid={this.state.PID} disease={this.state.Pdisease} weight={this.state.Pweight} height={this.state.Pheight} bg={this.state.Pbg} age={this.state.Page} docID={this.state.PdocID} pnum={this.state.PpolicyID} addPatient={this.addPatient} ptx={this.state.txHash} getPatient={this.getPatient} />
                        </div>
                    } />
                    <Route exact path="/Insurance" render={props =>
                        <div>
                            <Navbar active="insurance" />
                            <Insurance iuid={this.state.IUID} pid={this.state.IpID} did={this.state.IdocID} pnum={this.state.IpolicyNo} amt={this.state.Iamount} itx={this.state.txHash} addInsurance={this.addInsurance} getIns={this.getInsurance} claimIns={this.claimInsurance} />
                        </div>
                    } />
                </Router>
            </div>
        )
    }
}

export default Main;