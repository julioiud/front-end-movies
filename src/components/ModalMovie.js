import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

// Servicio gender
import GenderService from "../services/GenderService";
import MovieService from "../services/MovieService";

// Loader
import Loader from "react-loader-spinner";

function ModalMovie(props) {
  const { show, handleClose } = props;
  const [genders, setGenders] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [genderId, setGenderId] = useState(null);
  const [image, setImage] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await GenderService.get();
        setGenders(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "name":
        setName(value ? value : null);
        break;
      case "description":
        setDescription(value ? value : null);
        break;
      case "gender":
        if (value) {
          setGenderId(value);
        } else {
          setGenderId(null);
        }
        break;
      case "image":
        setImage(value ? value : null);
        break;
      case "releaseDate":
        setReleaseDate(value ? value : null);
        break;
      case "actors":
        setActors(value ? value : null);
        break;
      default:
        break;
    }
  };

  const handleSaveMovie = async () => {
    try {
      setIsLoading(true);
      await MovieService.create({
        name,
        description,
        image,
        genderId: { id: parseInt(genderId) },
        actors,
        releaseDate,
      });
      handleClose();
    } catch (error) {
      console.log(error);
      alert("Error al guardar la información");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      animation={false}
      centered
      backdrop="static"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Nueva pelicula</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormLabel className="custom-form-label">Nombre</FormLabel>
            <FormControl
              disabled={isLoading}
              name="name"
              value={name ? name : ""}
              onChange={handleOnChange}
              placeholder="Nombre"
              className="custom-form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Descripción</FormLabel>
            <FormControl
              disabled={isLoading}
              name="description"
              value={description ? description : ""}
              onChange={handleOnChange}
              placeholder="Descripción"
              className="custom-form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Género</FormLabel>
            <FormControl
              disabled={isLoading}
              name="gender"
              value={genderId ? genderId : ""}
              onChange={handleOnChange}
              as="select"
              className="custom-form-control"
            >
              <option value="">--SELECCIONE--</option>
              {genders &&
                genders.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Imagen</FormLabel>
            <FormControl
              disabled={isLoading}
              name="image"
              value={image ? image : ""}
              onChange={handleOnChange}
              placeholder="Imagen"
              className="custom-form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Fecha estreno</FormLabel>
            <FormControl
              disabled={isLoading}
              name="releaseDate"
              value={releaseDate ? releaseDate : ""}
              onChange={handleOnChange}
              type="date"
              className="custom-form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="custom-form-label">Actores</FormLabel>
            <FormControl
              disabled={isLoading}
              name="actors"
              value={actors ? actors : ""}
              onChange={handleOnChange}
              placeholder="Actores"
              className="custom-form-control"
            />
          </FormGroup>
          {!isLoading && (
            <Button
              disabled={
                !name ||
                !description ||
                !genderId ||
                !releaseDate ||
                !image ||
                !actors
              }
              block
              className="custom-button"
              onClick={handleSaveMovie}
            >
              Registrar
            </Button>
          )}
          {isLoading && (
            <div className="text-center text-success">
              <Loader type="ThreeDots" color="#007bff" height={50} width={50} />
              <p>Cargando...</p>
            </div>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalMovie;
