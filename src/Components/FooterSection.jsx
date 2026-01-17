// components/Footer.jsx
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold">Meta Open Source</h5>
            <p className="text-secondary mt-3">
              © Meta Platforms, Inc
            </p>
            <p className="text-secondary">uwu?</p>
          </Col>

          {/* Column 2 */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">Learn React</h6>
            <ul className="list-unstyled mt-3">
              <li>Quick Start</li>
              <li>Installation</li>
              <li>Describing the UI</li>
              <li>Adding Interactivity</li>
              <li>Managing State</li>
              <li>Escape Hatches</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">API Reference</h6>
            <ul className="list-unstyled mt-3">
              <li>React APIs</li>
              <li>React DOM APIs</li>
            </ul>
          </Col>

          {/* Column 4 */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">Community</h6>
            <ul className="list-unstyled mt-3">
              <li>Code of Conduct</li>
              <li>Meet the Team</li>
              <li>Docs Contributors</li>
              <li>Acknowledgements</li>
            </ul>
          </Col>

          {/* Column 5 */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">More</h6>
            <ul className="list-unstyled mt-3">
              <li>Blog</li>
              <li>React Native</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </Col>
        </Row>

        {/* Social Icons */}
        <div className="d-flex justify-content-end gap-3 mt-4">
          <FaFacebook size={22} />
          <FaXTwitter size={22} />
          <FaGithub size={22} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
