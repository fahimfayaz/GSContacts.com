import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import style from "./dropdown.css";
import React,  {Component, useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Logo from "./partials/Logo";
import style1 from "./navBar.module.css";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { transform } from "lodash";
import { ScatterPlot } from "@material-ui/icons";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <Nav.Link className={style1.ani_link} href="/">Home</Nav.Link>
            <Nav.Link className={style1.ani_link} href="/about-us">About Us</Nav.Link>

            <NavDropdown className={style1.ani_link} title="Study Abroad" id="collapsible-nav-dropdown">
              <span >
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
            <Nav.Link className={style1.ani_link} href="/institute-partners">Institute Partners</Nav.Link>
            <Nav.Link className={style1.ani_link} href="/events">Events</Nav.Link>
          </Nav>
          
          <div style={{float: "right"}}>
            <Nav className="mr-auto">
            
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"                
                color="primary"
                size="larger"
                right ="100%"
                onClick={handleMenu}
              >
                <AccountCircle style={{transform: 'Scale(1.5)'}} />
              </IconButton>           
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }} 
                open={open}
                onClose={handleClose}   
              >
                <MenuItem onClick={handleClose}>
                  <Nav.Link href="#deets">
                    <Typography
                      className={style1.menuItemFont}
                      variant="primary"
                    >
                      Sign In
                    </Typography>
                  </Nav.Link></MenuItem>
                <MenuItem onClick={handleClose}>
                  <Nav.Link eventKey={2} href="#memes">
                    <Typography
                      className={style1.menuItemFont}
                      variant="primary"
                    >
                      Register
                    </Typography>
                  </Nav.Link></MenuItem>
              </Menu> 
            </Nav>
          </div>  
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
// }
// }

export default NavMenu;
