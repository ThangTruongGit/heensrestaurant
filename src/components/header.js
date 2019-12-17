import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { Link } from 'gatsby';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand>Heen's Restaurant</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/" tag={Link}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/menu" tag={Link}>Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact" tag={Link}>Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
          </Container>
      </Navbar>
    </div>
  );
}

export default Header;