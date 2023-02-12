import { Container, Nav, Navbar, NavDropdown }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './ted_navbar.css'

import tedx_logo from '../../assets/tedx_logo.png';

function TedNavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="" variant="dark" expand="lg" className="p-0 navbar-fixed-top" expanded={expanded}>
      <Container className="ted-navbar-container">
        <Navbar.Brand as={Link} to="/">
          <img
            id="tedx-logo"
            src={tedx_logo}
            width="100%"
            height="30vw"
            className="d-inline-block align-top"
            alt="TEDxUofW Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
              <Nav.Link as={Link} to="/speakers" onClick={() => setExpanded(false)}>
                Speakers
              </Nav.Link>
            <NavDropdown title="About">
              <NavDropdown.Item as={Link} to="/about-tedx" onClick={() => setExpanded(false)}>About TEDx</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/meet-the-team" onClick={() => setExpanded(false)}>Meet The Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/sponsors" onClick={() => setExpanded(false)}>
                Sponsors
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TedNavBar;