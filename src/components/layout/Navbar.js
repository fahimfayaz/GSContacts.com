import Dropdown from "react-bootstrap/Dropdown";
import "./dropdown.css";
import React, { Component, useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Logo from "./partials/Logo";
// class NavMenu extends Component{

// render(){

//   const [show, setShow] = useState(false);
// const showDropdown = (e)=>{
//     setShow(!show);
// }
// const hideDropdown = e => {
//     setShow(false);
// }
const NavMenu = () => {
  return (
    <>
      <Navbar
        className="nav-font sticky-top"
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
        sticky="top"
        fixedTop
        // show={show}
        // onMouseEnter={showDropdown}
        // onMouseLeave={hideDropdown}
      >
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>

            <NavDropdown title="Study Abroad" id="collapsible-nav-dropdown">
              <span>
                <NavDropdown.Item className="dropdown-box" href="/canada">
                  Study in Canada
                </NavDropdown.Item>
                
                <NavDropdown.Item className="dropdown-box" href="/uk">
                  Study in U.K.
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-box" href="/australia">
                  Study in Australia
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-box" href="/cyprus">
                  Study in Cyprus
                </NavDropdown.Item>
              </span>
            </NavDropdown>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <span>
                <NavDropdown.Item className="dropdown-box" href="/recruitment-partners">
                  Recruitment Partners
                </NavDropdown.Item>
                
                <NavDropdown.Item className="dropdown-box" href="/institute-partners">
                  Institute Partners
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdown-box" href="/students">
                  Students
                </NavDropdown.Item>
             
              </span>
            </NavDropdown>
       
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
// }
// }

export default NavMenu;
