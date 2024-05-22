import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';


const AboutUs = () => {
  const aboutText = "Your company has a unique story to tell, and we are here to share it. Our journey began in [Your Start Year], and since then, we've been committed to providing exceptional services...";

  return (
    <Container>
      <Row className="my-5 align-items-center">
        <Col lg="6">
          <Card>
            <CardBody>
              <CardTitle tag="h2">About Us</CardTitle>
              <CardText>{aboutText}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <CardTitle tag="h3">Our Story</CardTitle>
              <CardText>Watch our journey and learn more about our values, mission, and the people behind the brand.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
