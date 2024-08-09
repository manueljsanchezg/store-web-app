import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchProductById } from '../utils/api.js'
import './ProductPage.css'

const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = async () => {
          try {
            const productData = await fetchProductById(id)
            setProduct(productData)
            setLoading(false)
          } catch (error) {
            console.error(error);
          }
        };
        getProduct()
      }, [id])

      if (loading) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras los datos se están obteniendo
      }

      return (
        <div className="product-page">
            <img src={product.image} alt={product.title} className="product-page-image" />
            <div className="product-page-info">
                <h1 className="product-page-title">{product.title}</h1>
                <p className="product-page-price">{product.price}$</p>
                <p className="product-page-description">{product.description}</p>
            </div>
        </div>
      )
}

export default ProductPage