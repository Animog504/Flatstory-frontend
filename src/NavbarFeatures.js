import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Play from './Play.js';


export default class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="black" dark expand="sm">
                    <NavbarBrand >
                    {/*FLATSTORY BUT WE DONT NEED THIS*/}
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink exact to="/" render={Home}>Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink exact to="/about" render={About} >About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink exact to="/play" render={Play}>Play</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav>
                          
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Signup/Login</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/signup">Signup</DropdownItem>
                                    <DropdownItem href="/login">Login</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                          <NavItem>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
