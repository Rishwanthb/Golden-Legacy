import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
function Contact() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Contact us</h3>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Form with contact us!</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
