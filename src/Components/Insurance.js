import React, { Component } from 'react';

class Insurance extends Component {
    render() {
        return (
            <div>
                <div className="container-ins">
                    <button className="add-button" onClick={
                        () => {
                            var x = document.getElementById('addInsurance')
                            if (x.style.display === 'none') {
                                x.style.display = 'block'
                            }
                            x = document.getElementById('claimInsurance')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('viewInsurance')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('showIns')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                        }
                    }>Add Insurance</button>
                    <button className="add-button view-button" onClick={
                        () => {
                            var x = document.getElementById('claimInsurance')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('addInsurance')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }

                            x = document.getElementById('viewInsurance')
                            if (x.style.display === 'none') {
                                x.style.display = 'block'
                            }
                            x = document.getElementById('showIns')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                        }
                    }>View Insurance</button>
                    <button className="view-button" onClick={
                        () => {
                            var x = document.getElementById('claimInsurance')
                            if (x.style.display === 'none') {
                                x.style.display = 'block'
                            }
                            x = document.getElementById('addInsurance')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('viewInsurance')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('showIns')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                        }
                    }>Claim Insurance</button>
                </div>
                <div id="addInsurance" className="small-container-1" style={{ display: "none" }}>
                    <p className="para"> Enter the following details </p>
                    <br /><br />
                    <p className="paraP1"> Policy Number: <input id='apnum' className="inputP" type="text"></input></p>
                    <p className="paraP2"> Patient ID: <input id='apid' className="inputP1" type="text"></input></p>
                    <br /><br /><br /><br />
                    <p className="paraP1"> Doctor ID: <input id='adid' className="inputP" type="text"></input></p>
                    <p className="paraP2"> Amount: <input id='aamt' className="inputP1" type="text"></input></p>
                    <br /><br /><br />
                    <button className="add-input-button" onClick={() => {
                        var x = document.getElementById('claimInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('viewInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        var pnum = document.getElementById('apnum').value
                        var pid = document.getElementById('apid').value
                        var did = document.getElementById('adid').value
                        var amt = document.getElementById('aamt').value
                        this.props.addInsurance(pnum, pid, did, amt)
                        x = document.getElementById('showIns')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                    }}>Add Insurance</button>
                </div>
                <div id="viewInsurance" className="small-container" style={{ display: "none" }}>
                    <p className="para"> Enter the following details </p>
                    <br /><br />
                    <p className="paraP1"> Insurance ID: <input id='viuid' className="inputP1" type="text"></input></p>
                    <br /><br /><br />
                    <p className="paraP1"> Patient ID: <input id='vpid' className="inputP" type="text"></input></p>
                    <p className="paraP1"> Doctor ID: <input id='vdid' className="inputP1" type="text"></input></p>
                    <br /><br /><br />
                    <button className="add-input-button" onClick={() => {
                        var x = document.getElementById('claimInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('viewInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        var iuid = document.getElementById('viuid').value
                        var pid = document.getElementById('vpid').value
                        var did = document.getElementById('vdid').value
                        this.props.getIns(iuid, pid, did)
                        x = document.getElementById('showIns')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                    }}>View Insurance</button>
                </div>
                <div id="claimInsurance" className="small-container" style={{ display: "none" }}>
                    <p className="para"> Enter the following details </p>
                    <br /><br />
                    <p className="paraP1"> Insurance ID: <input id='ciuid' className="inputP1" type="text"></input></p>
                    <p className="paraP1"> Patient ID: <input id='cpid' className="inputP" type="text"></input></p>
                    <br /><br /><br />
                    <p className="paraP1"> Doctor ID: <input id='cdid' className="inputP1" type="text"></input></p>
                    <p className="paraP1"> Amount: <input id='camt' className="inputP" type="text"></input></p>
                    <br /><br /><br />
                    <button className="add-input-button" onClick={()=>{
                        var x = document.getElementById('claimInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('viewInsurance')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        var iuid = document.getElementById('ciuid').value
                        var pid = document.getElementById('cpid').value
                        var did = document.getElementById('cdid').value
                        var amt = document.getElementById('camt').value
                        this.props.claimIns(iuid, pid, did, amt)
                        x = document.getElementById('showIns')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                    }}>Claim Insurance</button>
                </div>
                <div id="showIns" className="small-container" style={{ display: "none" }}>
                    <p className="para"> Insurance Details </p>
                    <br />
                    <p className="paraSI1"> Insurance ID: <p className="paraP1">{this.props.iuid}</p></p>
                    <p className="paraSI2"> Paitent ID: <p className="paraP1">{this.props.pid}</p></p>
                    <br /><br /><br />
                    <p className="paraSI2"> Doctor ID: <p className="paraP1">{this.props.did}</p></p>
                    <p className="paraSI2"> Policy Number: <p className="paraP1">{this.props.pnum}</p></p>
                    <br /><br /><br />
                    <p className="paraSI2"> Amount: <p className="paraP1">{this.props.amt}</p></p>
                </div>
                <div id="loading">
                    <h2>Your Transaction is being Mined</h2>
                    <h2>Transaction Number:</h2>
                    <h3>{this.props.itx}</h3>
                    <br/><br/>
                    <img src='https://i1.wp.com/equity.guru/wp-content/uploads/2018/02/mining3.gif?ssl=1' alt='blockchain mining'/>
                </div>
                <div id="loadingF">
                    <h2>Details are being fetched</h2>
                    <h2>Please wait</h2>
                </div>
            </div>
        )
    }
}

export default Insurance