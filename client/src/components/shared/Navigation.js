import { AuthConsumer } from "../../providers/AuthProvider";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ user, handleLogout }) => {
  
  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Nav.Link onClick={ () => handleLogout()}>
            Logout
          </Nav.Link>
        </>
      )
    } else {
      return (
        <>
          <Nav.Link>
            <Link to="/login">
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/register">
              Register
            </Link>
          </Nav.Link>
        </>
      )
    } 
  }
  
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              Coach Assist
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            { rightNavItems() }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navigation { ...props } { ...auth } />
    }
  </AuthConsumer>
)

export default ConnectedNavbar;