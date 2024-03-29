import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import style from "./dropdown.css";
import React,  {Component, useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Logo from "./partials/Logo";
import style1 from "./navbar.module.css";
import {Link} from 'react-scroll';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { transform } from "lodash";
import { ScatterPlot, Search } from "@material-ui/icons";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import Image from "../elements/Image";
import "./TopNav.css";
//import SearchBar from "../elements/HomeSearch"
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
    <div className="nav-font sticky-top">
      <Navbar className="body" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
        <Nav.Link className="top_link" href="#services">Service</Nav.Link>
        <Nav.Link className="top_link" href="#solution_center">Solution Center</Nav.Link>
        </Nav>
        <Nav>
        <NavDropdown className="lang_link" title="English" id="collasible-nav-dropdown">
            <NavDropdown.Item className="dropdown-box" href="#action/3.1">English</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-box" href="#action/3.2">Español</NavDropdown.Item>
            <NavDropdown.Item className="dropdown-box" href="#action/3.3">Russian</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="top_link_meeting" href="#deets">Schedule a Meeting</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar
        //className="nav-font sticky-top"
        collapseOnSelect
        expand="lg"
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{marginTop:"10px"}}>
          <Nav className="mr-auto" style={{marginLeft:"10%"}}>
            <Nav.Link className={style1.ani_link} href="/">Home</Nav.Link>
            <Nav.Link className={style1.ani_link} href="/about-us">About Us</Nav.Link>
          <Nav.Link  className={style1.ani_link}>  <Link 
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            
             to="study-abroad">Study Abroad</Link></Nav.Link>
            <Nav.Link className={style1.ani_link} href="#services"><Link 
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            
             to="services">Services</Link></Nav.Link>
            {/* <NavDropdown className={style1.ani_link} title="Study Abroad" id="collapsible-nav-dropdown">
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
              
            </NavDropdown> */}
            {/* <NavDropdown className={style1.ani_link} title="Services" id="collapsible-nav-dropdown">
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
            </NavDropdown> */}
           
            <Nav.Link className={style1.ani_link} href="/events">Events</Nav.Link>
            <Nav.Link className={style1.ani_link} href="/about-us">Resources</Nav.Link>
          </Nav>
          
          <div style={{float: "right", marginRight: "40px"}}>
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
                <AccountCircle style={{transform: 'Scale(1.5)',color:'rgb(0,165,79)'}} />
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
                <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
           Sign In
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography>The content of the Popover.</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState></MenuItem>
                <MenuItem onClick={handleClose}>
                <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Register
          </Button>
          <Popover
         
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
          >
            <Box p={10}>

          
            <Grid container spacing={3}>
          
            <Nav.Link  href="/agent-registration"> 
            <Grid item xs={2.5} sm container>
              <Grid item xs container direction="column" style={{paddingRight:"20px",paddingLeft:"20px"}}>
                <Grid item xs style={{margin:"auto 0",float:"center",display:"inline",paddingTop:"5px",paddingBottom:"5px"}}>
                <Image
                  src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937619/student_mm2r0b.svg"
                  style={{margin:"auto"}}
                  alt="Features tile icon 01"
                  width={60}
                  height={30} />
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{color:"#00a54f"}}>Student</span>
                </Grid>
             
              </Grid>
            </Grid>
            </Nav.Link > 
            <Nav.Link  href="/agent-registration"> 
            <Grid item xs={2.5}  sm container>
              <Grid item xs container direction="column" style={{paddingRight:"20px",paddingLeft:"20px"}}>
                <Grid item xs style={{margin:"auto 0",float:"",display:"inline",paddingTop:"5px",paddingBottom:"5px"}}>
                  <Image
                    src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937620/call_y22jrr.png"
                    alt="Features tile icon 01"
                    style={{margin:"auto"}}
                    width={60}
                    height={30} />
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                   <span style={{color:"#00a54f"}}>Agent</span>
                </Grid>
             
              
              </Grid>
            </Grid>
            </Nav.Link > 
            <Nav.Link  href="/agent-registration"> 
            <Grid item xs={2.5} sm container>
              <Grid item xs container direction="column"  style={{paddingRight:"20px",paddingLeft:"20px"}} >
                <Grid item xs style={{margin:"auto 0",float:"center",display:"inline",paddingTop:"5px",paddingBottom:"5px"}}>
                <Image
                  src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937620/university_uanz3o.png"
                  style={{margin:"auto"}}
                  alt="Features tile icon 01"
                  width={60}
                  height={30} />
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{color:"#00a54f"}}>Instituition</span>
                </Grid>
                
              </Grid>
            </Grid>
            </Nav.Link > 
            <Nav.Link  href="/agent-registration"> 
            <Grid item xs={2.5} sm container>
              <Grid item xs container direction="column" style={{paddingRight:"20px",paddingLeft:"20px"}} >
                <Grid item xs style={{margin:"auto 0",float:"center",display:"inline",paddingTop:"5px",paddingBottom:"5px"}}>
                <Image
                  src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1617937895/certificate_m0jyqf.png"
                  style={{margin:"auto"}}
                  alt="Features tile icon 01"
                  width={60}
                  height={30} />
                </Grid>
                <Grid item xs style={{paddingTop:"5px",paddingBottom:"5px"}}>
                  <span style={{color:"#00a54f"}}>Service <br/>Provider</span>
                </Grid>
                
              </Grid>
            </Grid>
            </Nav.Link > 
            
          </Grid>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState></MenuItem>
              </Menu> 
            </Nav>
          </div>  
        </Navbar.Collapse>
      </Navbar>
      </div>
    </>
  );
};
// }
// }

export default NavMenu;