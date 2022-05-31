import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionsContext";
const Navbars = () => {
    const { currentAccount, connectWallet } = useContext(TransactionContext);

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
                        {!currentAccount && (
                            <Nav.Link onClick={connectWallet} type="button">Connect Wallet</Nav.Link>
                        )}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;