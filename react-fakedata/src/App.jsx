import { useEffect, useState } from 'react'
import './App.css'
import SingleProducts from './SingleProducts';

function App() {
const [products, setProducts] = useState([]);
const [cart,setCart] = useState([]);

  useEffect(() =>{
       fetch("./fakeData.json")
       .then(res=> res.json())
       .then(data => setProducts(data))
  }, [])
  const handleCart = (p) =>{
    const isExist = cart.find(item => item.id ==p.id);
    if(!isExist){
      setCart([...cart,p]);
    }
    else{
      alert("already exisit")
    }
 
  };
const handleDelete = (id) =>{
 const newCart = cart.filter(item => item.id !=id);
 setCart(newCart);
}

  console.log(cart);
  return (
    <>
     
     <div className='main-container'>
    <div className="cards-container">
      {
        products.map(pd=><SingleProducts products={pd} handleCart={handleCart}></SingleProducts>)
      }
     
    </div>
    <div className="cart-container">
      <h1>This is  cart</h1>
      <div className="cart-title">
        <h5>name</h5>
        <h5>pric</h5>
      </div>
    
      {cart.map((item,index) => (
     
        <div className="cart-info">
          <p>{index+1}</p>
        <h5>{item.title.slice(0,10)}</h5>
            <h5>{item.price}</h5>
            <button onClick={() =>handleDelete(item.id)}>Delete</button>
        </div>
      ))
    }
    </div>
    
     </div>
    


     
     
    </>
  )
}

export default App
