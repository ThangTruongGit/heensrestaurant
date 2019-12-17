import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
                <Link href="/">Home</Link>
                </NavItem>
                <NavItem>
                <Link href="/menu">Menu</Link>
                </NavItem>
                <NavItem>
                <Link href="/contact">Contact</Link>
                </NavItem>
            </Nav>
            </Collapse>
          </Container>
      </Navbar>
    </div>
  );
}

export default Header;