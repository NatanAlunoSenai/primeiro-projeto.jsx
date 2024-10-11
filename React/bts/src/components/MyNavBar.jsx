import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavBar = () => {
  return (
    <nav>
 <Navbar expand="lg" 
 className="bg-body-tertiary" bg="dark"
 data-bs-theme="">
      <Container fluid>
        
        <Navbar.Brand href="#home">
        <img
              src="https://th.bing.com/th/id/OIP.t6HJxme4D2XVjBA3akEdngHaHa?rs=1&pid=ImgDetMain"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />{''}
              mais
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
          className="me-auto my-2-lg-0">
          <style>{{ maxHeight: '1000px'}}</style>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </nav>
  )
}

export default MyNavBar