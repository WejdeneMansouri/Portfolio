import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section"id="contact">
      <Container>
        <Row className="text-center text-md-start">
          {/* Partie Informations */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Wijden Mansouri</h5>
            <p>Étudiante en Ingénierie Data Science & IA<br />Passionnée par le développement web et l'IA.</p>
          </Col>

          {/* Partie Contact */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:wijdenmansouri.m@gmail.com">wijdenmansouri.m@gmail.com</a>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <a href="tel:+21628660398">+216 28 660 398</a>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Bardo, Tunis, Tunisie</span>
              </li>
            </ul>
          </Col>

          {/* Partie Réseaux Sociaux */}
          <Col md={4}>
            <h5 className="footer-title">Réseaux</h5>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/wijden-mansouri-442a00231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/WejdeneMansouri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Wijden Mansouri — Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
