import React, { Component } from 'react';

class Doctor extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <button className="add-button" onClick={
                        () => {
                            var x = document.getElementById('addDoc')
                            if (x.style.display === 'none') {
                                x.style.display = 'block'
                            }
                            x = document.getElementById('viewDoc')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('showDoc')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                        }
                    }>Add Doctor</button>
                    <button className="view-button" onClick={
                        () => {
                            var x = document.getElementById('viewDoc')
                            if (x.style.display === 'none') {
                                x.style.display = 'block'
                            }
                            x = document.getElementById('addDoc')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                            x = document.getElementById('showDoc')
                            if (x.style.display === 'block') {
                                x.style.display = 'none'
                            }
                        }
                    }>View Doctor</button>
                </div>
                <div id="addDoc" className="small-container" style={{ display: "none" }}>
                    <p className="para"> Enter the following details </p>
                    <p className="para1"> Name: <input id='dname' className="input" type="text"></input></p>
                    <p className="para2"> Profession: <input id='dprof' className="input1" type="text"></input></p>
                    <button className="add-input-button" onClick={() => {
                        var x = document.getElementById('viewDoc')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addDoc')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        this.props.addDoc(document.getElementById('dname').value, document.getElementById('dprof').value)
                        x = document.getElementById('showDoc')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                        
                    }}>Add Doctor</button>
                </div>
                <div id="viewDoc" className="small-container" style={{ display: "none" }}>
                    <p className="para"> Enter the following details </p>
                    <p className="para1"> UID: <input id='duid' className="input1" type="text"></input></p>
                    <button className="add-input-button" onClick={()=>{
                        var x = document.getElementById('viewDoc')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addDoc')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        this.props.getDoc(document.getElementById('duid').value)
                        x = document.getElementById('showDoc')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                    }}>View Doctor</button>
                </div>
                <div id="showDoc" className="small-container" style={{ display: "none" }}>
                    <p className="para"> Doctor Details </p>
                    <p className="paraS1"> UID: <p className="paraP1">{this.props.uid}</p></p>
                    <p className="paraS2"> Name: <p className="paraP1">{this.props.name}</p></p>
                    <p className="paraS2"> Profession: <p className="paraP1">{this.props.prof}</p></p>
                    <p><sup>*</sup>Note the UID for any further references</p>
                </div>
                <div id="loading">
                    <h2>Your Transaction is being Mined</h2>
                    <h2>Transaction Number:</h2>
                    <h3>{this.props.dTx}</h3>
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

export default Doctor