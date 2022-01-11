import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import { Button, Form, Segment, Header } from 'semantic-ui-react';

const Login = ({ history, handleLogin}) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  }

  return (
    <Segment basic>
      <Header as='h1' textAlign='center'>Login</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input 
          label="Email"
          autoFocus
          required
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value})}
        />
        <Form.Input 
          label="Password"
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value})}
        
        />
        <Segment textAlign='center' basic>
          <Button primary type='submit'>Submit</Button>
        </Segment>
      </Form>
    </Segment>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login { ...props } { ...auth } /> }
  </AuthConsumer>
)

export default ConnectedLogin;