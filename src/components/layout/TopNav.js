import "./dropdown.css";
import React, { Component, useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./TopNav.css";

const TopNavMenu = () => {
  return (
      <>
      <Navbar className="body" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" style={{marginLeft: "100px"}}>
            <Nav.Link className="top_link" href="#services">Service</Nav.Link>
            <Nav.Link className="top_link" href="#solution_center">Solution Center</Nav.Link>
            </Nav>
            <Nav style={{marginRight: "100px"}}>
            <NavDropdown className="lang_link" title="English" id="collasible-nav-dropdown">
                <NavDropdown.Item className="dropdown-box" href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-box" href="#action/3.2">Español</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-box" href="#action/3.3">Russian</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="top_link_meeting" href="#deets">Schedule a Meeting</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
        );
    };
export default TopNavMenu;