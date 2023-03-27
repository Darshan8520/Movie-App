import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";

function NavScrollExample({search}) {
  let [searchIn, setSearchIn] = useState()
  return (
    <Navbar style={{backgroundColor: 'black'}} expand="lg" >
      <Container fluid>
        <Navbar.Brand > <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'/></Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px'}}
          >
            <Nav.Link style={{color: 'white'}}> Watch Your Favrioute Movies For Free Only On Our Website!!</Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{setSearchIn(e.target.value)}}
            />
            <Button variant="outline-warning" onClick={()=>{search(searchIn)}}>Search</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;