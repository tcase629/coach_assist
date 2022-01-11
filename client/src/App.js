import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from  './components/auth/Register';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route element={<Nomatch />} />
      </Routes>
  </>
)

export default App;
