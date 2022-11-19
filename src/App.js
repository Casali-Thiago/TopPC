import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import MainPage from './pages/main/index.js'
import ProductsBar from './pages/main/index.js'
import Footer from './pages/main/index.js'
import LoginPage from './pages/login/index.js'
import RegisterPage from './pages/register/index.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='login/register' element={<RegisterPage />} />
        <Route path="/" element={<ProductsBar />} />
        <Route path="/" element={<Footer />} />
      </Routes>  
    </Router>
  );
}

export default App;
