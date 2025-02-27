import React from 'react'
import './products.css'

function Product(props) {
  return (
    <div>
       <ul>
        <li><b>Product Title:</b>{props.title}</li>
        <li><b>Product Description:</b>{props.description}</li>
        <li><b>Product Category:</b>{props.category}</li>
        <li><b>Product Price:</b>{props.price}</li>

      </ul>
    </div>
  )
}

export default Product
