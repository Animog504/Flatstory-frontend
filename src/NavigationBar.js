import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
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

                          <div className="modal fade" id="signupLoginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <form  onSubmit={e => {e.preventDefault(); console.log("form submit",e.target); this.props.handleFormLogin(e.target[1].value,e.target[2].value);}}>
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>

                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body" align="center">
                                    <div className="imgcontainer">
                                      </div>
                                        <div className="container">
                                          <label htmlFor="uname"><b>Username :</b></label>
                                          <input type="text" placeholder="Enter Username" name="uname" required />
                                          <br></br>
                                          <label htmlFor="psw"><b>Password :</b></label>
                                          <input type="password" placeholder="Enter Password" name="psw" required />
                                          <br></br>
                                      </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

                          <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                  <form id="signupForm" onSubmit={e => {e.preventDefault(); console.log("form register",e.target); this.props.handleFormRegister(e.target[1].value,e.target[2].value,e.target[3].value);}}>
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body mx-3">
                                        <div className="md-form mb-5">
                                            <i className="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="orangeForm-name" className="form-control validate" placeholder="Your Name"/>
                                            <label data-error="wrong" data-success="right" htmlFor="orangeForm-name"></label>
                                        </div>
                                        <div className="md-form mb-5">
                                            <i className="fa fa-envelope prefix grey-text"></i>
                                            <input type="email" id="orangeForm-email" className="form-control validate" placeholder="Your Email" />
                                            <label data-error="wrong" data-success="right" htmlFor="orangeForm-email"></label>
                                        </div>

                                        <div className="md-form mb-4">
                                            <i className="fa fa-lock prefix grey-text"></i>
                                            <input type="password" id="orangeForm-pass" className="form-control validate" placeholder="Your Password"/>
                                            <label data-error="wrong" data-success="right" htmlFor="orangeForm-pass"></label>
                                        </div>

                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                        <button className="btn btn-deep-orange">Sign up</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="logOutForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLongTitle">Logged Out</h5>
                                  <div className="modal-footer">
                                    <button onClick={this.props.handleLogOut} type="button" className="btn btn-secondary" data-dismiss="modal">Log Out</button>
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
