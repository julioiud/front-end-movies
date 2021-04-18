import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import ModalMovie from "../components/ModalMovie";

function Movie(props) {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleOpenModal = () => {
    setShow(true);
  };

  if (!localStorage.getItem("user")) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location },
        }}
      />
    );
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container className="App container custom-container">
      <Row>
        <Col lg={12}>
          <h4 className="color-text">
            Hola {user.name}, ¿Desear crear una nueva pelicula?
          </h4>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Button
            block
            className="custom-button-movie"
            onClick={handleOpenModal}
          >
            Nueva pelicula
          </Button>
        </Col>
      </Row>

      {show && <ModalMovie handleClose={handleCloseModal} show={show} />}
    </Container>
  );
}

export default Movie;
