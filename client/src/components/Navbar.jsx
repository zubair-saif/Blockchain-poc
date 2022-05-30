import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navbars = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Cyrpto</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#market">Market</Nav.Link>
                        <Nav.Link href="#exchange">Exchange</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Connect Wallet</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;