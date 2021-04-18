import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="App container">
      <Row>
        <Col lg={12}>
          <h4 className="color-text">Categorias</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
