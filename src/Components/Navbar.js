import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
            <div>
            {
                this.props.active === 'home' && (
                    <div>
                        <nav className='navbar'>
                            <Link to='/'><button className='navbar-content active'> Home </button></Link>
                            <Link to='/Doctor'><button className='navbar-content'> Doctor </button></Link>
                            <Link to='/Patient'><button className='navbar-content'> Patient </button></Link>
                            <Link to='/Insurance'><button className='navbar-content'> Insurance </button></Link>
                        </nav>
                    </div>
                )
            }
            {
                this.props.active === 'doctor' && (
                    <div>
                        <nav className='navbar'>
                            <Link to='/'><button className='navbar-content'> Home </button></Link>
                            <Link to='/Doctor'><button className='navbar-content active'> Doctor </button></Link>
                            <Link to='/Patient'><button className='navbar-content'> Patient </button></Link>
                            <Link to='/Insurance'><button className='navbar-content'> Insurance </button></Link>
                        </nav>
                    </div>
                )
            }
            {
                this.props.active === 'patient' && (
                    <div>
                        <nav className='navbar'>
                            <Link to='/'><button className='navbar-content'> Home </button></Link>
                            <Link to='/Doctor'><button className='navbar-content'> Doctor </button></Link>
                            <Link to='/Patient'><button className='navbar-content active'> Patient </button></Link>
                            <Link to='/Insurance'><button className='navbar-content'> Insurance </button></Link>
                        </nav>
                    </div>
                )
            }
            {
                this.props.active === 'insurance' && (
                    <div>
                        <nav className='navbar'>
                            <Link to='/'><button className='navbar-content'> Home </button></Link>
                            <Link to='/Doctor'><button className='navbar-content'> Doctor </button></Link>
                            <Link to='/Patient'><button className='navbar-content'> Patient </button></Link>
                            <Link to='/Insurance'><button className='navbar-content active'> Insurance </button></Link>
                        </nav>
                    </div>
                )
            }
            </div>
        )
    }
}

export default Navbar