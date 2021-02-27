import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/icons/icon.png";
import "./navbar_style.css";
const Navbar_component = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed='top'
        variant='dark'
        expand='md'
        className='animate-navbar nav-theme justify-content-between'
      >
        <Navbar.Brand href='#home'>
          <h1>Suraj Yadav</h1>
        </Navbar.Brand>
        <Navbar.Toggle className='menu' aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbar_component;
