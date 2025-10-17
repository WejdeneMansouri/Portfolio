import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // ton fichier CSS perso

export default function Home() {
  return (
    <Container className="home-section py-5">
      {/* Header */}
      <Row className="align-items-center mb-5">
        <Col md={4} className="text-center">
          <img
            src="/photo_cv.jpeg"
            alt="Wejdene Mansouri"
            className="img-fluid rounded-circle home-avatar"
          />
        </Col>
        <Col md={8} className="text-md-start text-center">
          <h1 className="fw-bold">Wijden Mansouri</h1>
          <h4 className="text-muted">Ingénieure Logiciel Junior</h4>
          <p className="lead mt-3">
            Jeune diplômée en Génie Logiciel, passionnée par le
            <strong> développement web </strong> et <strong>l’IA</strong>.
          </p>
          <div className="d-flex gap-3 justify-content-md-start justify-content-center">
            <Button variant="primary" href="/CV_Wijden_Mansouri.pdf" target="_blank">
              Télécharger mon CV
            </Button>
            <Button
              variant="outline-primary"
              href="https://github.com/WejdeneMansouri"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir mes projets
            </Button>
          </div>
        </Col>
      </Row>

      {/* À propos */}
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h3 className="fw-bold mb-3">À propos</h3>
          <p className="text-muted">
            Je suis passionnée par la création de solutions logicielles
            innovantes. J’ai une solide base en développement full-stack et je
            m’intéresse particulièrement à l’Intelligence Artificielle et à
            l’optimisation des systèmes.
          </p>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center gap-5 flex-wrap mt-3"
        >
          <div className="feature text-center">
            <i className="bi bi-search fs-2 text-primary"></i>
            <p>Curieuse</p>
          </div>
          <div className="feature text-center">
            <i className="bi bi-people fs-2 text-primary"></i>
            <p>Esprit d’équipe</p>
          </div>
          <div className="feature text-center">
            <i className="bi bi-check2-circle fs-2 text-primary"></i>
            <p>Rigoureuse</p>
          </div>
          <div className="feature text-center">
            <i className="bi bi-lightbulb fs-2 text-primary"></i>
            <p>Créative</p>
          </div>
        </Col>
      </Row>

      {/* Projets */}
      <Row id="projets" className="mb-4 section">
        <h3 className="fw-bold text-center mb-4">Projets</h3>

        <Col md={4} className="mb-3">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div className="mb-3">
                <img
                  src="/logo.png"
                  alt="React Logo"
                  className="tech-logo"
                />
              </div>
              <Card.Title>E-commerce Marbre</Card.Title>
              <Card.Text>React + Node.js</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/WejdeneMansouri/Marbrerie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div className="mb-3">
                <img src="/angular.png" alt="Angular Logo" className="tech-logo" />
              </div>
              <Card.Title>Portail RH</Card.Title>
              <Card.Text>Angular + MySQL</Card.Text>
              <Button variant="primary">Voir le projet</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body>
              <div className="mb-3">
                <img src="/xampp.png" alt="Oracle Logo" className="tech-logo" />
              </div>
              <Card.Title>Event Platform</Card.Title>
              <Card.Text>HTML + PHP</Card.Text>
              <Button
                variant="primary"
                href="https://github.com/WejdeneMansouri/iTeam-Event-Platform/tree/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
