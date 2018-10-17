import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';



export default class NavigationBar extends Component {
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
        console.log("click")
    }
    render() {
        return (
                <Navbar color="black" dark expand="sm">
                    <NavbarBrand >
                    {/*FLATSTORY BUT WE DONT NEED THIS*/}
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem>

                             <NavLink  to="/" exact >Home</NavLink>

                          </NavItem>
                          <NavItem>

                              <NavLink to="/about" exact >About</NavLink>

                          </NavItem>
                          <NavItem>

                              <NavLink to="/play" exact >Play</NavLink>

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
        );
    }
}
