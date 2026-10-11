
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">

        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              My Website
            </Navbar.Brand>

            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center">
            Welcome to My Website
          </h1>

          {/* Three Cards */}
          <div className="d-flex gap-3 mt-4 flex-wrap">

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is the first card.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is the second card.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is the third card.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
        </Container>

      </div>
    </>
  );
}

export default App;
