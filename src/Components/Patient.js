import React,{Component} from 'react';

class Patient extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <button className="add-button" onClick={
                        () => {
                            var x = document.getElementById('addPatient')
                            if(x.style.display === 'none'){
                                x.style.display ='block'
                            }
                            x = document.getElementById('viewPatient')
                            if(x.style.display === 'block'){
                                x.style.display ='none'
                            }
                            x = document.getElementById('showPatient')
                            if(x.style.display === 'block'){
                                x.style.display ='none'
                            }
                        }
                    }>Add Patient</button>
                    <button className="view-button" onClick={
                        () => {
                            var x = document.getElementById('viewPatient')
                            if(x.style.display === 'none'){
                                x.style.display ='block'
                            }
                            x = document.getElementById('addPatient')
                            if(x.style.display === 'block'){
                                x.style.display ='none'
                            }
                            x = document.getElementById('showPatient')
                            if(x.style.display === 'block'){
                                x.style.display ='none'
                            }
                        }
                    }>View Patient</button>
                </div>
                <div id="addPatient" className="small-container-1" style={{display:"none"}}>
                    <p className="paraP"> Enter the following details </p>
                    <p className="paraP1"> Disease: <input id='die' className="inputP" type="text"></input></p>
                    <p className="paraP2"> Weight: <input id='w' className="inputP1" type="text"></input></p>
                    <br/><br/><br/>
                    <p className="paraP1"> Height: <input id='h' className="inputP" type="text"></input></p>
                    <p className="paraP2"> Blood Group: <input id='bg' className="inputP1" type="text"></input></p>
                    <br/><br/><br/>
                    <p className="paraP1"> Age: <input id='age' className="inputP" type="text"></input></p>
                    <p className="paraP2"> Doctor ID: <input id='dId' className="inputP1" type="text"></input></p>
                    <br/><br/><br/>
                    <p className="paraP1"> Policy Number: <input id='pol' className="inputP" type="text"></input></p>
                    <br/><br/>
                    <button className="add-input-button" onClick={()=>{
                        var x = document.getElementById('viewPatient')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addPatient')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        var d = document.getElementById('die').value
                        var bg = document.getElementById('bg').value
                        var w = document.getElementById('w').value 
                        var h = document.getElementById('h').value
                        var age = document.getElementById('age').value
                        var did = document.getElementById('dId').value
                        var pol = document.getElementById('pol').value
                        this.props.addPatient(d, bg, w, h, age, did, pol)
                        x = document.getElementById('showPatient')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                    }}>Add Patient</button>
                </div>
                <div id="viewPatient" className="small-container" style={{display:"none"}}>
                    <p className="para"> Enter the following details </p>
                    <p className="para1"> UID: <input id='puid' className="input1" type="text"></input></p>
                    <button className="add-input-button" onClick={()=>{
                        var x = document.getElementById('viewPatient')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        x = document.getElementById('addPatient')
                        if (x.style.display === 'block') {
                            x.style.display = 'none'
                        }
                        this.props.getPatient(document.getElementById('puid').value)
                        x = document.getElementById('showPatient')
                        if (x.style.display === 'none') {
                            x.style.display = 'block'
                        }
                    }}>View Patient</button>
                </div>
                <div id="showPatient" className="small-container" style={{display:"none"}}>
                    <p className="para"> Paitent Details </p>
                    <p className="paraSI1"> Paitent ID: <p className="paraP1">{this.props.pid}</p></p>
                    <p className="paraSI2"> Disease: <p className="paraP1">{this.props.disease}</p></p>
                    <br/><br/>
                    <p className="paraSI2"> Weight: <p className="paraP1">{this.props.weight}</p></p>
                    <p className="paraSI2"> Height: <p className="paraP1">{this.props.height}</p></p>
                    <br/><br/>
                    <p className="paraSI2"> Blood Group: <p className="paraP1">{this.props.bg}</p></p>
                    <p className="paraSI2"> Age: <p className="paraP1">{this.props.age}</p></p>
                    <br/><br/>
                    <p className="paraSI2"> Doctor ID: <p className="paraP1">{this.props.docID}</p></p>
                    <p className="paraSI2"> Policy Number: <p className="paraP1">{this.props.pnum}</p></p>
                    <p className='terms'><sup>*</sup>Note the UID for any further references</p>
                </div>
                <div id="loading">
                    <h2>Your Transaction is being Mined</h2>
                    <h2>Transaction Number:</h2>
                    <h3>{this.props.ptx}</h3>
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

export default Patient