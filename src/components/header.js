import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from "gatsby";
import clsx from "clsx";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const y = window.scrollY;
    setSticky(y > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScrollTo = el => e => {
    e.preventDefault();
    document.querySelector(`#${el}`).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div
      className={clsx({
        "header-wrapper": true,
        "header-wrapper-sticky": isSticky
      })}
    >
      <Navbar expand="md">
        <Container>
          <NavbarBrand>Heen's Restaurant</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="#menu" tag={Link} onClick={handleScrollTo("menu")}>
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="#contact"
                  tag={Link}
                  onClick={handleScrollTo("contact")}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
