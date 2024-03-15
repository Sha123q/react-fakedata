
const SingleProducts = ({products,handleCart}) => {
    // console.log(handleCart);
    return (
        <div>
           <div className='card'>
      <img
       className="card-img"
        src={products.image} alt="" />
      <h1>{products.title}</h1>
      <p>{products.description}</p>
      <div className="card-footer">
        <h1>{products.price}</h1>
     <button onClick={(e) => handleCart(products)} className="add-btn"> Add To cart</button>
      </div>
     </div> 
        </div>
    );
};

export default SingleProducts;