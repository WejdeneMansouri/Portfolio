import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./Competences.css";

export default function Competences() {
  return (
    <Container id="competences" className="competences-section py-5">
      <h2 className="fw-bold text-center mb-5">Compétences</h2>

      {/* Certifications */}
      <Row className="mb-5">
        <h3 className="fw-bold section-title">🎓 Certifications</h3>
        {[
          "Python Essentials 1",
          "Python Essentials 2",
          "Introduction to IoT",
          "Introduction to Modern AI",
          "Ethical Hacker",
        ].map((certif, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-3">
            <Card className="skill-card shadow-sm">
              <Card.Body className="text-center">{certif}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Langages & Frameworks */}
      <Row className="mb-5">
        <Col md={6}>
          <h3 className="fw-bold section-title">💻 Langages</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Python", "Java", "JavaScript", "C++", "C#", "PHP", "SQL", "HTML/CSS"].map(
              (lang, i) => (
                <Badge key={i} pill bg="primary" className="skill-badge">
                  {lang}
                </Badge>
              )
            )}
          </div>
        </Col>
        <Col md={6}>
          <h3 className="fw-bold section-title">⚙️ Frameworks & Outils</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Spring Boot", "Angular", "React", "Node.js", "Figma"].map((fw, i) => (
              <Badge key={i} pill bg="secondary" className="skill-badge">
                {fw}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      {/* Bases de données & Data Science */}
      <Row className="mb-5">
        <Col md={6}>
          <h3 className="fw-bold section-title">🗄️ Bases de données</h3>
          <div className="d-flex flex-wrap gap-2">
            {["MySQL", "Firebase", "SQL Server"].map((db, i) => (
              <Badge key={i} pill bg="success" className="skill-badge">
                {db}
              </Badge>
            ))}
          </div>
        </Col>
        <Col md={6}>
          <h3 className="fw-bold section-title">📊 Data Science</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Pandas", "NumPy", "Matplotlib"].map((ds, i) => (
              <Badge key={i} pill bg="info" className="skill-badge">
                {ds}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      {/* Méthodologies */}
      <Row className="mb-5">
        <Col md={12}>
          <h3 className="fw-bold section-title">📌 Méthodologies</h3>
          <Badge pill bg="dark" className="skill-badge">
            Agile / Scrum
          </Badge>
        </Col>
      </Row>

      {/* Soft Skills */}
      <Row className="mb-5">
        <Col md={12}>
          <h3 className="fw-bold section-title">🤝 Soft Skills</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Gestion de projet", "Travail en équipe"].map((soft, i) => (
              <Badge key={i} pill bg="warning" text="dark" className="skill-badge">
                {soft}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      {/* Langues */}
      <Row>
        <Col md={12}>
          <h3 className="fw-bold section-title">🌍 Langues</h3>
          <ul className="list-unstyled langues-list">
            <li>🇹🇳 Arabe — Natif</li>
            <li>🇫🇷 Français — C1</li>
            <li>🇬🇧 Anglais — C1</li>
            <li>🇹🇷 Turc — C1</li>
            <li>🇩🇪 Allemand — B2</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
