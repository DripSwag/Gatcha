import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import HomePage from './pages/HomePage';
import Layout from './pages/Layout'
import UserHomePage from './pages/UserHomePage';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="homepage" element={<UserHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
