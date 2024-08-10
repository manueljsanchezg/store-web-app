import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage'
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  )
}

export default App
