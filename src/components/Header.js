import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/Inbox'>Inbox</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
