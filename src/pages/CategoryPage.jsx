import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../utils/api"
import ProductCard from "../components/ProductCard"
import "./CategoryPage.css"

const CategoryPage = () => {
    const { categoryName } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
      const getProducts = async () => {
          try {
              const productsData = await fetchProducts()
              const filteredProducts = productsData.filter(product => product.category === categoryName)
              setProducts(filteredProducts)
          } catch (error) {
              console.error("Error fetching products in HomePage:", error)
              setProducts([])
           }
      }
      getProducts()
    }, [categoryName])

    return (
        <div className="category-page">
          <h1 className="category-page-title">{categoryName.toLocaleUpperCase}</h1>
          
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )
}

export default CategoryPage
