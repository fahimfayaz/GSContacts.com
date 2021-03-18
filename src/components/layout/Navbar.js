import Dropdown from "react-bootstrap/Dropdown";
import "./dropdown.css";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Logo from "./partials/Logo";

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
              <span >
              <NavDropdown.Item className="dropdown-box" href="/university">
                Find Universities
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-box" href="#action/3.2">Services</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-box" href="#action/3.3">
                Find Countries
              </NavDropdown.Item>

              <NavDropdown.Item className="dropdown-box" href="#action/3.4">
                Scholarship Opportunities
              </NavDropdown.Item>

              </span>
              
            </NavDropdown>
            <Nav.Link href="/recruitment-partners">
              Recruitment Partners
            </Nav.Link>
            <Nav.Link href="/institute-partners">Institute Partners</Nav.Link>
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

export default NavMenu;
