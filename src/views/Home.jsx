import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleOnClickEntrar = () => {
navigate("/pokemones")
  }

  return (
    <div> <div className="pokedex-cover">
    <Container>
      <Row>
        <Col>
          <Image src="https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Image-File.png" fluid style={{width: '400px', height: 'auto'}} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Pokédex</h1>
          <p>¡Atrápalos a todos!</p>
          <Button variant="warning" onClick={handleOnClickEntrar}>Entrar</Button>{' '}
        </Col>
      </Row>
    </Container>
  </div></div>
  )
}

export default Home