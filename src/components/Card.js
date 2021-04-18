import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function MovieCard(props) {
  const {
    name,
    description,
    image,
    actors,
    rating,
    genderId,
    releaseDate,
  } = props.movie;

  return (
    <Card style={{ margin: "10px" }}>
      <Card.Img variant="top" height={160} src={`${image}`} />

      <Card.Body>
        <Row>
          <Col lg={12}>
            <Card.Title>{name}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card.Text>
              <p>{description}</p>
              <p>{`Fecha estreno: ${releaseDate}`}</p>
            </Card.Text>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card.Title>Actores</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card.Text>{actors}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      {localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user")).profileId.id === 1 && (
          <Card.Footer>
            <Row>
              <Col lg={6} xs={6}>
                <Button block size="sm" variant="primary">
                  Actualizar
                </Button>
              </Col>
              <Col lg={6} xs={6}>
                <Button
                  onClick={() => props.handleDeleteMovie(props.movie.id)}
                  block
                  size="sm"
                  variant="danger"
                >
                  Eliminar
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        )}
    </Card>
  );
}
