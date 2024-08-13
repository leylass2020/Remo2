import "bootstrap/dist/css/bootstrap.css";
import "../styles/joinus.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import att from "../imgs/icons/paperclip.svg";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FormSelect from "react-bootstrap/FormSelect";
import camera from "../imgs/icons/camera.svg";
import { motion } from "framer-motion";

function JoinUs() {
  const position = [
    { id: 1, type: "Software engineering" },
    { id: 2, type: "DEVops service" },
    { id: 3, type: "UI / UX Design" },
    { id: 4, type: "Web Development" },
    { id: 5, type: "MVP Development" },
    { id: 6, type: "Branding Design" },
    { id: 7, type: "Mobile Development" },
    { id: 8, type: "Databases" },
  ];
  const positionType = [
    { id: 1, type: "Job" },
    { id: 2, type: "Training" },
  ];
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Navbar />
      <motion.div
        className="header"
        whileInView={{ y: -5 }}
        transition={{ type: "spring", delay: 0.25 }}
      >
        <h1>
          <a href="#">Join Us!</a>
        </h1>
        <hr />
        <p>
          We help build and manage a team of world-class developers <br />
          to bring your vision to life
        </p>
      </motion.div>
      {/* end header */}
      <div className="container">
        {/*section 1 */}
        <div className="section sec2">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 ">
              <Form.Label className="upload">
                Upload your cv <span className="star">*</span>
              </Form.Label>
              <Form.Control type="file" id="up-cv" required />
              <Form.Label htmlFor="up-cv" id="upload-cv">
                attach your cv <img className="atta" src={att}></img>
              </Form.Label>
            </Row>
            <Row className="mb-3 second-section">
              <Col xs={4}>
                <Form.Label htmlFor="name">
                  First Name <span className="star">*</span>
                </Form.Label>
                <Form.Control id="name" required />
              </Col>
              <Col xs={4}>
                <Form.Label htmlFor="lastname">
                  Last Name <span className="star">*</span>
                </Form.Label>
                <Form.Control id="lastname" required />
              </Col>
            </Row>
            <Row className="mb-3 second-section">
              <Col xs={4}>
                <Form.Label htmlFor="email">
                  Email <span className="star">*</span>
                </Form.Label>
                <Form.Control type="email" id="email" required />
              </Col>
              <Col xs={4}>
                <Form.Label htmlFor="phone">
                  Phone num <span className="star">*</span>
                </Form.Label>
                <Form.Control id="phone" required />
              </Col>
            </Row>
            <Row className="mb-3 second-section">
              <Col xs={4}>
                <Form.Label htmlFor="address">
                  Address <span className="star">*</span>
                </Form.Label>
                <Form.Control id="address" required />
              </Col>
              <Col xs={4}>
                Add Picture<br></br>
                <Form.Control type="file" id="addp" />
                <Form.Label htmlFor="addp" id="picture-add">
                  <img className="camera" src={camera}></img>Upload personal
                  picture
                </Form.Label>
              </Col>
            </Row>
            <h1>Job Information</h1>
            <Row className="mb-3 second-section">
              <Col xs={4}>
                <Form.Label htmlFor="position">
                  Position <span className="star">*</span>
                </Form.Label>
                <Form.Select
                  id="position"
                  dmx-bind:options="serverconnect1.data.query"
                  required
                >
                  <option value="">Select a Position</option>
                  {position.map((item) => (
                    <option value={item.id}>{item.type}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col xs={4}>
                <Form.Label htmlFor="positiontype">
                  Position type <span className="star">*</span>{" "}
                </Form.Label>
                <Form.Select
                  about="Select a Position Type"
                  id="positiontype"
                  dmx-bind:options="serverconnect1.data.query"
                  required
                >
                  <option value="">Select a Position Type</option>
                  {positionType.map((item) => (
                    <option value={item.id}>{item.type}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3 second-section">
              <Col xs={4}>
                <Form.Label htmlFor="linked">Linked in profile</Form.Label>
                <Form.Control type="email" id="linked" />
              </Col>
              <Col xs={4}>
                <Form.Label htmlFor="other">
                  Other links (Behance, Git hub, etc..)
                </Form.Label>
                <Form.Control id="other" />
              </Col>
            </Row>
            <Row className="mb-3 second-section">
              <Col xs={11}>
                <Form.Label htmlFor="talk">
                  talk about your self in 150 Characters
                  <span className="star">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  id="talk"
                  minLength={150}
                  required
                />
              </Col>
            </Row>

            <div className="left-button">
              <Button type="submit" className="mb-2 button-submit">
                Submit application
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
export default JoinUs;
