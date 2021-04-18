import React from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

function SingUp(props) {
  const { show, handleClose } = props;
  return (
    <Modal
      animation={false}
      centered
      backdrop="static"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Crear cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel className="custom-form-label">Nombre</FormLabel>
            <FormControl placeholder="Nombre" className="custom-form-control" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Email</FormLabel>
            <FormControl placeholder="Email" className="custom-form-control" />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Contraseña</FormLabel>
            <FormControl
              placeholder="Contraseña"
              className="custom-form-control"
            />
          </FormGroup>
          <Button block className="custom-button" onClick={handleClose}>
            Registrar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>Acepta terminos y condiciones</p>
      </Modal.Footer>
    </Modal>
  );
}

export default SingUp;
