import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router"

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="fs-4">Crud Food React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavLink to={"/"} className={"nav-link"} >HOME</NavLink>
            <Nav.Link href="#link">Link</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default Menu
