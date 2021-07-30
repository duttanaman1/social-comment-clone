import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
function Footer() {
  return (
    <div style={{ marginTop: "4rem" }} className="footer">
      <Nav>
        <NavItem>
          <NavLink href="#" style={{ color: "black" }}>
            Integrations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "black" }}>
            amazon
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "black" }}>
            Northern
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "black" }}>
            Google
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" style={{ color: "black" }}>
            Skrill
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Footer;
