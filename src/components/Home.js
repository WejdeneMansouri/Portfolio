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
            src={`${process.env.PUBLIC_URL}/photo_cv.jpeg`}
            alt="Wijden Mansouri"
            className="img-fluid rounded-circle home-avatar"
          />
        </Col>
        <Col md={8} className="text-md-start text-center">
          <h1 className="fw-bold">Wijden Mansouri</h1>
          <h4 className="text-muted">Développeuse Logicielle Junior Full-Stack</h4>
          <p className="lead mt-3">
            Développeuse logicielle junior full-stack, attentive aux détails, passionnée par le 
            développement d'applications et motivée par la création de solutions innovantes liant le 
            <strong> développement web </strong> et <strong>l’IA</strong>.
          </p>
          <div className="d-flex gap-3 justify-content-md-start justify-content-center">
            <Button 
              variant="primary" 
              href={`${process.env.PUBLIC_URL}/${encodeURIComponent("Mansouri Wijden CV.pdf")}`} 
              target="_blank"
            >
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
            Passionnée par la création de solutions logicielles innovantes, j'ai consolidé une solide 
            base en développement full-stack à travers diverses expériences d'applications métiers, de la gestion RH 
            au monitoring applicatif. Je m’intéresse particulièrement à l’intégration de l’Intelligence Artificielle 
            et à l'optimisation des architectures logicielles pour améliorer l'expérience utilisateur et les performances techniques.
          </p>
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-center gap-5 flex-wrap mt-3"
        >
          <div className="feature text-center">
            <i className="bi bi-search fs-2 text-primary"></i>
            <p className="fw-bold">Attentive aux détails</p>
          </div>
          <div className="feature text-center">
            <i className="bi bi-people fs-2 text-primary"></i>
            <p className="fw-bold">Esprit d’équipe</p>
          </div>
          <div className="feature text-center">
            <i className="bi bi-check2-circle fs-2 text-primary"></i>
            <p className="fw-bold">Organisation & Gestion</p>
          </div>
          <div className="feature text-center">
            <i className="bi bi-lightbulb fs-2 text-primary"></i>
            <p className="fw-bold">Créativité & Innovation</p>
          </div>
        </Col>
      </Row>

      {/* Projets & Expériences Phares */}
      <Row id="projets" className="mb-4 section">
        <h3 className="fw-bold text-center mb-4">Projets & Expériences Récentes</h3>

        {/* Projet 1: Joya Energy */}
        <Col md={4} className="mb-3">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div className="mb-3">
                  <img 
                    src={`${process.env.PUBLIC_URL}/next.jpeg`} 
                    alt="Next.js Logo" 
                    className="tech-logo" 
                    style={{ maxHeight: "40px" }} 
                  />
                </div>
                <Card.Title className="fw-bold">Joya Energy Platform</Card.Title>
                <Card.Text className="text-muted small">
                  Développement du site web (utilisateur & back-office), monitoring d'applications et intégration d'un chatbot IA intelligent.
                </Card.Text>
              </div>
              <div className="mt-3">
                <Card.Text className="text-primary sm mb-2">Next.js • Node.js • MongoDB</Card.Text>
                <Button variant="primary" size="sm" disabled>Projet Professionnel</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Projet 2: Portail RH ArabSoft */}
        <Col md={4} className="mb-3">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div className="mb-3">
                  <img 
                    src={`${process.env.PUBLIC_URL}/angular.png`} 
                    alt="Angular Logo" 
                    className="tech-logo" 
                    style={{ maxHeight: "40px" }} 
                  />
                </div>
                <Card.Title className="fw-bold">Portail RH (ArabSoft)</Card.Title>
                <Card.Text className="text-muted small">
                  Application complète de gestion des employés, congés, paie et évaluations. Rapprochement des processus métier ayant réduit de 40% le temps de traitement.
                </Card.Text>
              </div>
              <div className="mt-3">
                <Card.Text className="text-primary sm mb-2">Angular • Spring Boot • MySQL</Card.Text>
                <Button variant="primary" size="sm" disabled>Projet d'Entreprise</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Projet 3: E-commerce Wafa / Marbrerie */}
        <Col md={4} className="mb-3">
          <Card className="h-100 text-center shadow-sm">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div className="mb-3">
                  <img 
                    src={`${process.env.PUBLIC_URL}/logo.png`} 
                    alt="React Logo" 
                    className="tech-logo" 
                    style={{ maxHeight: "40px" }} 
                  />
                </div>
                <Card.Title className="fw-bold">Application E-commerce Wafa</Card.Title>
                <Card.Text className="text-muted small">
                  Conception et mise en production d'une application de vente de produits en ligne optimisée avec une architecture performante.
                </Card.Text>
              </div>
              <div className="mt-3">
                <Card.Text className="text-primary sm mb-2">React • Node.js • MySQL</Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  href="https://github.com/WejdeneMansouri/Marbrerie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}