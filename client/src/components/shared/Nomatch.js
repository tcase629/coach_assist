import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h3 textAlign="center">
      Sorry. Page Not Found.
    </h3>
    <Link to="/">Home</Link>
  </>
)

export default Nomatch;