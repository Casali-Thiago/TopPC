import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import MainPage from './pages/main/index.js'
import ProductsBar from './pages/main/index.js'
import Footer from './pages/main/index.js'
import LoginPage from './pages/login/index.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path="/" element={<ProductsBar />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
