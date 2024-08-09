import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/products/${product.id}`)
    }

    function truncateText(text, maxLength){
        if(text.length > maxLength){
            return text.slice(0, maxLength)
        }
        return text
    }

    return (
        <div className='product-card'>
        <button onClick={handleClick} className='product-card-button'>
            <img src={product.image} alt={product.title} className='ProductCard-image'/>
            <div className='product-card-info'>
                <h2 className='product-card-title'>{truncateText(product.title, 20)}</h2>
                <p className='product-card-price'>{product.price}$</p>
            </div>
        </button>
        </div>
    )
}

export default ProductCard