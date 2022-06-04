import { Container, Row, Col, Button, ToastContainer } from "react-bootstrap"
import FormDetails from './form'
import { Link } from "react-router-dom";
import NavbarContent from '../components/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
    return (

        <div className="home">
            <NavbarContent />
            <Container>
                <Row className="row">
                    <Col >
                        <h4>Create a portfolio</h4>
                        <br />
                        <h5>You can make a simple <strong>portfolio</strong> here and share anywhere!</h5>
                        <br />
                    </Col>
                    <Col >
                        <Link to="formDetails" >FormDetails</Link>

                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Home;