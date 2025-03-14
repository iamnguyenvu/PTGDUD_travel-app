import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "./custom/CustomButton";

function Header() {
  const {user, isSignedIn} = useUser();

  const gradient = 'linear-gradient(90deg, #0057B7 0%, #0081a1 100%)';

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" style={{background: gradient}}>
        <Container>
          <Navbar.Brand as={Link} to="/">Travel App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            {isSignedIn ?
              <div className="flex gap-2 items-center">
                <Link to={'/'}></Link>
                <UserButton />
              </div>
              :
                <Link to={'/auth/log-in'}>
                  <CustomButton>Sign-in</CustomButton>
                </Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
