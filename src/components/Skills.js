import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./Competences.css";

export default function Competences() {
  return (
    <Container id="competences" className="competences-section py-5">
      <h2 className="fw-bold text-center mb-5">Compétences & Certifications</h2>

      {/* Certifications */}
      <Row className="mb-5">
        <h3 className="fw-bold section-title">🎓 Certifications</h3>
        {[
          "Introduction to AWS (EC2 & S3) Workshop",
          "DevOps Fundamentals Training",
          "Python Essentials 1",
          "Python Essentials 2",
          "Introduction to IoT",
          "Introduction to Modern AI",
          "Ethical Hacker",
        ].map((certif, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-3">
            <Card className="skill-card shadow-sm h-100 border-start border-primary border-3">
              <Card.Body className="d-flex align-items-center justify-content-center text-center fw-medium py-3">
                {certif}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Langages & Frameworks */}
      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <h3 className="fw-bold section-title">💻 Langages</h3>
          <div className="d-flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "PHP", "Laravel", "SQL", "HTML/CSS"].map(
              (lang, i) => (
                <Badge key={i} pill bg="primary" className="skill-badge px-3 py-2 fs-6">
                  {lang}
                </Badge>
              )
            )}
          </div>
        </Col>
        <Col md={6}>
          <h3 className="fw-bold section-title">⚙️ Frameworks & Outils</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Next.js", "React", "Node.js", "Angular", "Spring Boot", "Docker", "Figma"].map((fw, i) => (
              <Badge key={i} pill bg="secondary" className="skill-badge px-3 py-2 fs-6">
                {fw}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      {/* Bases de données & Data Science */}
      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <h3 className="fw-bold section-title">🗄️ Bases de données</h3>
          <div className="d-flex flex-wrap gap-2">
            {["MongoDB", "MySQL", "Firebase", "SQL Server"].map((db, i) => (
              <Badge key={i} pill bg="success" className="skill-badge px-3 py-2 fs-6">
                {db}
              </Badge>
            ))}
          </div>
        </Col>
        <Col md={6}>
          <h3 className="fw-bold section-title">📊 Data Science</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Pandas", "NumPy", "Matplotlib", "Scikit-learn"].map((ds, i) => (
              <Badge key={i} pill bg="info" className="skill-badge px-3 py-2 fs-6">
                {ds}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>

      {/* Méthodologies & Soft Skills */}
      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <h3 className="fw-bold section-title">📌 Méthodologies</h3>
          <Badge pill bg="dark" className="skill-badge px-3 py-2 fs-6">
            Agile / Scrum
          </Badge>
        </Col>
        <Col md={6}>
          <h3 className="fw-bold section-title">🤝 Soft Skills</h3>
          <div className="d-flex flex-wrap gap-2">
            {["Gestion de projet", "Communication", "Travail en équipe", "Coordination", "Gestion du temps"].map((soft, i) => (
              <Badge key={i} pill bg="warning" text="dark" className="skill-badge px-3 py-2 fs-6">
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
          <div className="d-flex flex-wrap gap-3">
            <Badge bg="light" text="dark" className="border px-3 py-2 fs-6">🇹🇳 Arabe — Natif</Badge>
            <Badge bg="light" text="dark" className="border px-3 py-2 fs-6">🇫🇷 Français — C1</Badge>
            <Badge bg="light" text="dark" className="border px-3 py-2 fs-6">🇬🇧 Anglais — B2</Badge>
            <Badge bg="light" text="dark" className="border px-3 py-2 fs-6">🇹🇷 Turc — C1</Badge>
            <Badge bg="light" text="dark" className="border px-3 py-2 fs-6">🇩🇪 Allemand — B1</Badge>
          </div>
        </Col>
      </Row>
    </Container>
  );
}