import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandicon from './brandicon.gif';
import React from 'react';
import { useNavigate } from "react-router-dom";
import top from './top.svg';
import "./Home.css";



const Home = () => {
  const navigates = useNavigate();
  return (
    <div style={{display:"block"}}>
      <div><img style={{position:"sticky"}} src={top} alt="headerbg" /></div>
      <Navbar style={{marginTop:"-20%"}}  collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand style={{fontWeight:"600"}} href="#home"><img src={brandicon} alt="imaged" style={{ width: "43px", backgroundColor: "white", padding: "3px", margin: "5px", borderRadius: "20px", marginTop:"-5px" }}></img>PlayMe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  onClick={() => {navigates("/")}}><span className='headeroption'>Home</span></Nav.Link>
              <Nav.Link  onClick={() => {navigates("/customerlist")}} ><span className='headeroption'>Buckets</span></Nav.Link>
              <Nav.Link  onClick={() => {navigates("/history")}} ><span className='headeroption'>History</span></Nav.Link>
            </Nav>
            <Nav style={{ display: "block" }}>
              <div><Navbar.Text><strong>Your Personalised Playlist App</strong></Navbar.Text></div>
              <div><Navbar.Text style={{ fontSize: "xx-small", marginLeft: "50px" }}>Developed by- Harsh Kanojia</Navbar.Text></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;


