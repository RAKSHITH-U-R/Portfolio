import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap"
import { useState } from 'react';
import React from 'react';

function FormDetails() {

    const [name, setName] = useState("");
    const [objective, setObjective] = useState("");
    const [qualification, setQualification] = useState("");
    const [college, setCollege] = useState("");
    const [email, setEmail] = useState("");
    const [tech, setTech] = useState("");
    const [fileUrl, setFileUrl] = useState(null);
    const [platform, setPlatform] = useState("");
    const [skills, setSkills] = useState("");
    const [about, setAbout] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [filename, setFilename] = useState("");
    const [area, setArea] = useState("");
    return (
        <div style={{
            padding: '0px 300px'
        }}>
            <Form className="form" >
                <Col className="column col1">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="string" placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Objective</Form.Label>
                            <Form.Control type="string" placeholder="eg: Software engg, Front-end developer"
                                value={objective}
                                onChange={(e) => setObjective(e.target.value)}
                                required />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control type="string"
                                value={qualification}
                                onChange={(e) => setQualification(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                            <Form.Label>College</Form.Label>
                            <Form.Control type="string"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formFile">
                            <Form.Label>Profile pic</Form.Label>
                            <Form.Control type="file"
                                accept="image/*"
                            // onChange={onFileChange}
                            />
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Github</Form.Label>
                            <Form.Control placeholder="Github link"
                                type="url"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control type="string"
                                placeholder="LinkedIn Link"
                                type="url"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Languages</Form.Label>
                            <Form.Control type="string" placeholder="Python, C++"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Platform</Form.Label>
                            <Form.Control type="string" placeholder="Windows, Mac"
                                value={platform}
                                onChange={(e) => setSkills(e.target.value)}
                                required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tools & Technologies</Form.Label>
                            <Form.Control type="string" placeholder="Technologies"
                                value={tech}
                                onChange={(e) => setTech(e.target.value)}
                                required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Areas of Interest</Form.Label>
                            <Form.Control type="string" placeholder="Area of Interest"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>About</Form.Label>
                            <Form.Control type="string" placeholder="About yourself.."
                                as="textarea"
                                rows={2}
                                type="string"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                required />
                        </Form.Group>
                    </Row>
                </Col>
            </Form>
        </div>
    );
}

export default FormDetails;