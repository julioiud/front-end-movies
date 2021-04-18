import React, { useState } from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Vistas
import Home from "./views/Home";
import Gender from "./views/Gender";

// Components
import ModalSingUp from "./components/ModalSignUp";
import ModalLogin from "./components/ModalLogin";
import Movie from "./views/Movie";

// Logo
import Logo from "./assets/img/logo-escudo.png";

export default function App() {
  const [showRegistry, setShowRegistry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseModalRegistry = () => {
    setShowRegistry(false);
  };

  const handleOpenModalRegistry = () => {
    setShowRegistry(true);
  };

  const handleCloseModalLogin = () => {
    setShowLogin(false);
  };

  const handleOpenModalLogin = () => {
    setShowLogin(true);
  };

  const handleSuccessLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <Router>
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand>
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link className="custom-link" to="/">
              Inicio
            </Link>
            <Link className="custom-link" to="/gender">
              Generos
            </Link>
            {localStorage.getItem("user") && (
              <Link className="custom-link" to="/movie">
                Administración
              </Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {!localStorage.getItem("user") && (
              <Nav.Link>
                <Button variant="primary" onClick={handleOpenModalLogin}>
                  Entrar
                </Button>
              </Nav.Link>
            )}
            {!localStorage.getItem("user") && (
              <Nav.Link>
                <Button variant="success" onClick={handleOpenModalRegistry}>
                  Registro
                </Button>
              </Nav.Link>
            )}
            {localStorage.getItem("user") && (
              <Nav.Link>
                <Button variant="danger" onClick={handleLogout}>
                  Salir
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/gender" component={Gender} />
        <Route path="/movie" component={Movie} />
      </Switch>

      {showRegistry && (
        <ModalSingUp
          handleClose={handleCloseModalRegistry}
          show={showRegistry}
        />
      )}

      {showLogin && (
        <ModalLogin
          handleSuccessLogin={handleSuccessLogin}
          handleClose={handleCloseModalLogin}
          show={showLogin}
        />
      )}
    </Router>
  );
}
