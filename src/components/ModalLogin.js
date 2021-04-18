import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import UserService from "../services/UserService";

function SingUp(props) {
  const { show, handleClose, handleSuccessLogin } = props;
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleLogin = async () => {
    try {
      setMessage("Cargando su información...");
      const response = await UserService.login({ email, password });
      setMessage(null);
      handleSuccessLogin(response.data);
    } catch (error) {
      console.log(error);
      setMessage("Usuario y/o contraseña incorrecto!!!");
    }
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "email":
        setEmail(value ? value : null);
        break;
      case "password":
        setPassword(value ? value : null);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!email) {
      return;
    }

    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!expression.test(email)) {
      setErrorEmail("Por favor verifique su dirección de email!!!");
    } else {
      setErrorEmail(null);
    }
  }, [email]);

  useEffect(() => {
    if (!password) {
      return;
    }

    // Valida tamaño del texto
    if (password.length <= 5) {
      setErrorPassword(
        "El tamaño minimo de la contraseña es de 6 caracteres!!!"
      );
    } else {
      setErrorPassword(null);
    }
  }, [password]);

  return (
    <Modal
      animation={false}
      centered
      backdrop="static"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel className="custom-form-label">Email</FormLabel>
            <FormControl
              name="email"
              value={email ? email : ""}
              placeholder="Email"
              className="custom-form-control"
              onChange={handleOnChange}
            />
            <span className="text-danger">{errorEmail}</span>
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Contraseña</FormLabel>
            <FormControl
              type="password"
              name="password"
              value={password ? password : ""}
              placeholder="Contraseña"
              className="custom-form-control"
              onChange={handleOnChange}
            />
            <span className="text-danger">{errorPassword}</span>
          </FormGroup>
          <Button
            disabled={errorEmail || errorPassword || !email || !password}
            block
            className="custom-button"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
          <span className="text-danger">{message}</span>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>¿Perdiste tu contraseña?</p>
      </Modal.Footer>
    </Modal>
  );
}

export default SingUp;
