import { Container, Row, Col, Button, ToastContainer } from "react-bootstrap"
import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="home">
            <Container>
                <Row className="row">
                    <Col >
                        <h4>Create a portfolio</h4>
                        <br />
                        <h5>You can make a simple <strong>portfolio</strong> here and share anywhere!</h5>
                        <br />
                    </Col>
                    <Col >

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;