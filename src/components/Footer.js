import React from "react";
import { Container, Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={8}>
            <h1>Heens Restuarant</h1>
            <address>
              14 - 16 Mulgrave Road,
              <br />
              Sutton, Surrey
              <br />
              SM2 6LE
              <br />
              <tel>0208 643 1221</tel>
            </address>
          </Col>
          <Col md={4}>
            <h4>Opening Hours</h4>
            <p>
              <strong>Open 7 Days </strong>
              12:00pm - 2:30pm & 6:00pm - 11:00pm
              <br />
              <em>Close on Christmas and Boxing day</em>
            </p>
          </Col>
        </Row>
      </Container>

      <div className="footer-copyright">
        <Container>&copy; Heens Restaurant. All rights reserved.</Container>
      </div>
    </footer>
  );
};

export default Footer;
