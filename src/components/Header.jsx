import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
   return (
      <>
         <Navbar bg='dark' data-bs-theme='dark'>
            <Container fluid>
               <Navbar.Brand>
                  Just Converter
               </Navbar.Brand>
               <Nav className="me-auto">
                  <LinkContainer to='/'>
                     <Nav.Link>
                        Home
                     </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/converter'>
                     <Nav.Link>
                        Converter
                     </Nav.Link>
                  </LinkContainer>
               </Nav>
            </Container>
         </Navbar>
         
      </>
   )
}
