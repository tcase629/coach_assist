import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const Nomatch = () => (
  <Header as="h3" textAlign="center">
    Sorry. Page Not Found.
    <Link to="/">Home</Link>
  </Header>
)

export default Nomatch;