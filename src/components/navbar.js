import React, { Component } from 'react'
// import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'gatsby'


export default class Navbar extends 
Component {
    state={
        isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    };
    
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                 <div className="nav-header">
                {/* <Link to="/">
                    <img src={logo} alt="Beach Resort" />
                </Link> */}
                <button type="button" className="nav-btn"
                onClick={this.handleToggle}
                >
                <FaAlignRight className="nav-icon" />
                </button>
                 </div>
                 <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
                 >
                <li>
                    <a onClick={this.handleToggle} href="/">Home</a>
                </li>
                <li>
                    <a onClick={this.handleToggle} href="/about/">About</a>
                </li>
                <li>
                    <a onClick={this.handleToggle} href="/contact/">Contact</a>
                </li>
                 </ul>
                </div>
            </nav>
        );
    }
}