import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import PlayerCard from './PlayerCard';



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
                            {!this.props.currentPlayer ?

                                  <button type="button" class="btn-sm btn-warning" data-toggle="modal" data-target="#signupLoginModal">
                                    Login/Signup
                                  </button>
                              :
                              <PlayerCard style={{}} currentPlayer={{playerAvatar: null, playerName: "Scott", playerScore: 1337}} />
                            }
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav>



                          <div class="modal fade" id="signupLoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                <form  onSubmit={e => {e.preventDefault(); debugger; console.log("form submit",e.target)}}>
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>




                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body" align="center">

                                      <div class="imgcontainer">

                                      </div>

                                      <div class="container">
                                        <label for="uname"><b>Username :</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required />
                                        <br></br>
                                        <label for="psw"><b>Password :</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required />
                                        <br></br>


                                      </div>



                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Login</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}
