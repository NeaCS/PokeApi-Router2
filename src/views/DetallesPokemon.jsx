import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const DetallesPokemon = () => {
  const navigate = useNavigate();
  const [detallesPokemon, setDetallesPokemon] = useState();
  const params = useParams();
  
  const handleOnClickEntrar = () => {
    navigate("/pokemones");
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.nombre}`)
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data
        setDetallesPokemon(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [params]);

  console.log(detallesPokemon);

  return (
    <div>
      {detallesPokemon && (
        <div className="pokedex-cover">
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Row>
              <Col>
                <h3>{params.nombre.toUpperCase()}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: "18rem", backgroundColor: "lightblue" }}>
                  <Card.Img
                    variant="top"
                    src={detallesPokemon.sprites.front_default}
                  />
                  <Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>ID: {detallesPokemon.id}</ListGroupItem>
                      <ListGroupItem>
                        Altura: {detallesPokemon.height}
                      </ListGroupItem>
                      <ListGroupItem>
                        Peso: {detallesPokemon.weight}
                      </ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Button className={"mt-3"} variant="warning" onClick={handleOnClickEntrar}>
                  Volver a Buscar
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default DetallesPokemon;
