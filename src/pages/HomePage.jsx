import { useEffect, useState } from "react"
import { fetchProducts } from '../utils/api.js'
import ProductCard from '../components/ProductCard.jsx'
import './HomePage.css'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
        try {
            const productsData = await fetchProducts()
            setProducts(productsData)
        } catch (error) {
            console.error("Error fetching products in HomePage:", error)
            setProducts([])
         }
    }
    getProducts()
  }, [])

  return (
    <div className="homepage">
      <h1 className="home-page-welcome">Bienvenido a nuestra tienda</h1>
      <p>Explora nuestra selección de productos</p>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage