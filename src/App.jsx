import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
