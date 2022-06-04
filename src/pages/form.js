import NavbarContent from '../components/Navbar';
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap"

import { Link } from "react-router-dom";

// import { db } from "../firebase";
import { doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

import { useState, useEffect } from 'react';
import React from 'react';

function FormDetails() {


    // let history = useHistory();
    const auth = getAuth();

    const [userData, setUserData] = useState([]);
    const [name, setName] = useState("");
    const [objective, setObjective] = useState("");
    const [qualification, setQualification] = useState("");
    const [college, setCollege] = useState("");
    const [email, setEmail] = useState("");
    const [tech, setTech] = useState("");
    const [fileUrl, setFileUrl] = useState(null);
    const [skills, setSkills] = useState("");
    const [about, setAbout] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [filename, setFilename] = useState("");
    const [area, setArea] = useState("");

    const [platform, setPlatform] = useState("");

    const [inputList, setInputList] = useState([{ project_title: "", project_desc: "" }]);
    const [experience, setExperience] = useState([{ company: "", role: "", job_desc: "" }]);




    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [submit, setSubmit] = useState(true);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (currentUser) => {
    //         onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
    //             setUserData(doc.data());
    //             console.log(doc.data());
    //         });
    //     });

    // }, []);

    useEffect(() => {
        if (userData && userData.length !== 0) {
            setName(userData.name);
            setObjective(userData.headline);
            setQualification(userData.degree);
            setCollege(userData.college);
            setEmail(userData.email);
            setTech(userData.tech);
            setFileUrl(userData.fileUrl);
            setFilename(userData.filename);
            setSkills(userData.skills);
            setAbout(userData.about);
            setInputList(userData.inputList);
            setExperience(userData.experience);
            setGithub(userData.github);
            setLinkedin(userData.linkedin);
            setPortfolio(userData.portfolio);
            setSubmit(userData.submit);
        }

    }, [userData])

    // File upload
    const onFileChange = async (e) => {
        const storage = getStorage();
        const file = e.target.files[0];
        const fname = file.name;
        setFilename(fname);
        const storageRef = ref(storage, `${file.name}`);
        await uploadBytesResumable(storageRef, file);
        console.log(name);
        await getDownloadURL(ref(storage, storageRef)).then((url) => {
            setFileUrl(url);
        })
    };



    useEffect(() => {
        setInputList(inputList);
        setExperience(experience);

    })

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { project_title: "", project_desc: "" }]);
    };

    //Experience
    // handle input change
    const handleInputChange3 = (e, index) => {
        const { name, value } = e.target;
        const list3 = [...experience];
        list3[index][name] = value;
        setExperience(list3);
    };

    // handle click event of the Remove button
    const handleRemoveClick3 = index => {
        const list3 = [...experience];
        list3.splice(index, 1);
        setExperience(list3);
    };

    // handle click event of the Add button
    const handleAddClick3 = () => {
        setExperience([...experience, { company: "", role: "", job_desc: "" }]);
    };

    return (
        <div style={{
            padding: '0px 300px'
        }}> <NavbarContent />
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

                    <Form.Label>Projects</Form.Label>
                    {inputList.map((x, i) => {
                        return (
                            <div className="project">
                                <Form.Group as={Col} controlId="formGridProject">
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="string"
                                        placeholder="Project title"
                                        name="project_title"
                                        value={x.project_title}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDesc">
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        type="string"
                                        placeholder="Description"
                                        name="project_desc"
                                        value={x.project_desc}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </Form.Group>
                                <br />
                                {inputList.length !== 1 && <Button variant="outline-dark" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                                {inputList.length - 1 === i && <Button className="add-btn" variant="outline-dark" onClick={() => handleAddClick(i)}>Add</Button>}
                                <br />
                            </div>
                        );
                    })}


                    <Form.Label>Experience</Form.Label>
                    {experience.map((x, i) => {
                        return (
                            <div className="project">
                                <Row>
                                    <Form.Group as={Col} controlId="formGridProject">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="string"
                                            placeholder="Company"
                                            name="company"
                                            value={x.company}
                                            onChange={e => handleInputChange3(e, i)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridProject">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="string"
                                            placeholder="Role"
                                            name="role"
                                            value={x.role}
                                            onChange={e => handleInputChange3(e, i)}
                                        />
                                    </Form.Group>
                                </Row>


                                <Form.Group as={Col} controlId="formGridDesc">
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        type="string"
                                        placeholder="Description"
                                        name="job_desc"
                                        value={x.job_desc}
                                        onChange={e => handleInputChange3(e, i)}
                                    />
                                </Form.Group>
                                <br />
                                {experience.length !== 1 && <Button variant="outline-dark" onClick={() => handleRemoveClick3(i)}>Remove</Button>}
                                {experience.length - 1 === i && <Button className="add-btn" variant="outline-dark" onClick={() => handleAddClick3(i)}>Add</Button>}
                                <br />
                            </div>
                        );
                    })}

                </Col>
                <Link to="portfolio" target="_blank">Portfolio</Link>
            </Form>
        </div>
    );
}

export default FormDetails;

{/* <Link to={location => `/portfolio/items?id=${auth.currentUser.email}`} target="_blank">Portfolio</Link> */ }