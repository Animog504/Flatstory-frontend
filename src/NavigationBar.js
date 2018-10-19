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

                        <NavbarNav right>

                          <NavItem >
                            {!this.props.currentPlayer ?
                                <span>
                                  <button type="button" className="btn-sm btn-warning btn-rounded" data-toggle="modal" data-target="#signupLoginModal">
                                    Login
                                  </button>
                                  <span>    </span>
                                  <button type="button" className="btn-sm btn-warning btn-rounded" data-toggle="modal" data-target="#modalRegisterForm">
                                    Register
                                  </button>
                                </span>
                              :
                              <span>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <button type="button" className="btn-sm btn-warning btn-rounded" data-toggle="modal" data-target="#logOutForm">
                                          Logout
                                        </button>
                                      </td>
                                      <td>
                                        <PlayerCard className="PlayerCard" currentPlayer={this.props.currentPlayer} />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>



                              </span>
                            }
                          </NavItem>
                        </NavbarNav>

                          <div class="modal fade" id="signupLoginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                <form  onSubmit={e => {e.preventDefault(); console.log("form submit",e.target); this.props.handleFormLogin(e.target[1].value,e.target[2].value);}}>
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

                          <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                  <form id="signupForm" onSubmit={e => {e.preventDefault(); console.log("form register",e.target); this.props.handleFormRegister(e.target[1].value,e.target[2].value,e.target[3].value);}}>
                                    <div class="modal-header text-center">
                                        <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body mx-3">
                                        <div class="md-form mb-5">
                                            <i class="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="orangeForm-name" class="form-control validate" placeholder="Your Name"/>
                                            <label data-error="wrong" data-success="right" for="orangeForm-name"></label>
                                        </div>
                                        <div class="md-form mb-5">
                                            <i class="fa fa-envelope prefix grey-text"></i>
                                            <input type="email" id="orangeForm-email" class="form-control validate" placeholder="Your Email" />
                                            <label data-error="wrong" data-success="right" for="orangeForm-email"></label>
                                        </div>

                                        <div class="md-form mb-4">
                                            <i class="fa fa-lock prefix grey-text"></i>
                                            <input type="password" id="orangeForm-pass" class="form-control validate" placeholder="Your Password"/>
                                            <label data-error="wrong" data-success="right" for="orangeForm-pass"></label>
                                        </div>

                                    </div>
                                    <div class="modal-footer d-flex justify-content-center">
                                        <button class="btn btn-deep-orange">Sign up</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="logOutForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLongTitle">Logged Out</h5>
                                  <div class="modal-footer">
                                    <button onClick={this.props.handleLogOut} type="button" class="btn btn-secondary" data-dismiss="modal">Log Out</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </Collapse>
                </Navbar>
        );
    }
}
