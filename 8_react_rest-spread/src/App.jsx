import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'

function App() {

  //product object array
  const products = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}]


  return (
    <>
      {products.map((product=>{
        return (
          // <Product key={product.id} title={product.title} description={product.description} category ={product.category} price ={product.price}/>
          <Product key={product.id}  {...product}/>

        )
      }))}

    </>
  )
}

export default App







 /*  function sum(...rest){                  // Rest - list of parameters convert into array  []
    console.log(rest)
      let total=0
      rest.forEach(num=>{
        total+=num
      })
      return total;

  }
 console.log(sum(2,3,4,5,6,10))


  function mybio(name,channel,...rest){   // except name and channel rest parameters convert into array
    console.log(name,channel,rest)
  }
  mybio("sherul","sheru","a","b","c")

  let spread = [2,3,4,5,6,7]              //Spread - convert array into list of parameter
  console.log(Math.min(...spread))
 */