import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { TbPokeball } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Navbar style={{backgroundColor: "#ffcc33", paddingRight:"10%", paddingLeft:"10%"}} variant="dark" >
      <Navbar.Brand href="/">
        <TbPokeball color="#DC0A2D" font-size="42px"/>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse  className="justify-content-end">
        <Nav>
          <NavItem>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "unactive")}
              to="/"
              
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "unactive")}
              to="/pokemones"
              style={{marginLeft:"20%"}}
            >
              Pokemones
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
