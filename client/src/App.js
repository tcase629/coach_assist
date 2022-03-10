import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navigation from './components/shared/Navigation';
import Login from './components/auth/Login';
import Register from  './components/auth/Register';
import Teams from './components/teams/Teams';
import ShowTeam from './components/teams/ShowTeam'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';

const App = () => (
  <>
    <Navigation />
    <FetchUser>
      <Container>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:id" element={<ShowTeam />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Nomatch />} />
          </Routes>
        </>
      </Container>
    </FetchUser>  
  </>
)

export default App;
