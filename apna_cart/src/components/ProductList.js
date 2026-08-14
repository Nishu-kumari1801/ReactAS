import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
    // console.log(product);
  return (
    
    props.productList.length > 0 ?
    props.productList.map((product,i)=>{
      return <Product product={product} key={i} index={i} increamentQuantity={props.increamentQuantity}
      decreamentQuantity={props.decreamentQuantity} removeItem={props.removeItem}/>
    })
    : <h1>No Products Exist in the cart</h1>
    
  )
}
