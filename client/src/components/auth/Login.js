import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Login = ({ handleLogin}) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
    setUser({ email: '', password: ''});
  }

  return (
    <>
      <h1 textAlign='center'>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email"
                  autoFocus
                  required
                  name='email'
                  value={user.email}
                  placeholder='name@example.com'
                  onChange={(e) => setUser({ ...user, email: e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>  
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  required
                  name='password'
                  value={user.password}
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setUser({ ...user, password: e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Button variant="dark" type='submit'>Submit</Button>
      </Form>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login { ...props } { ...auth } /> }
  </AuthConsumer>
)

export default ConnectedLogin;