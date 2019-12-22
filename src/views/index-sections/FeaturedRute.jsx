import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function FeaturedRute() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Best Rute</h2>
              <h5 className="description">RuteLari terbaik pilihan runners.</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FeaturedRute;
