import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Button from "@material-ui/core/Button";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto w-75" navbar>
            <NavItem>
              <NavLink href="#" className="px-4">
                Integration
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="px-4">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="px-4">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="px-4">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
          <Button
            variant="outlined"
            color="primary"
            className="ml-auto px-5"
            style={{ borderRadius: "25px" }}
          >
            <strong>Get Early Access</strong>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
