import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png"
import React from "react";

function NavbarContent() {
    return (
        <Navbar>
            <Container>
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt="logo" />
                        Portfolio
                    </Navbar.Brand>

                </Navbar>
                <Navbar.Toggle />
                <Navbar>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Navbar>
    );
}

export default NavbarContent;