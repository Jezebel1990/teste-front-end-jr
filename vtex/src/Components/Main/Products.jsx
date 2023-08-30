import React from 'react'
import "/src/Components/styles/main/Products.scss";

const Products = () => {
  return (
   <section className="products-section">
    <div className="products-bottom">
     <div className="products">
        <div className="products-inf">
         <h1>Produtos</h1>
         <p>Lorem ipsum dolor sit amet, consectetur</p>

         <button>
            <a href="check-out">Confira</a>
         </button>
        </div>
     </div>
    </div>

    <div className="products-bottom">
     <div className="products">
        <div className="products-inf">   
        <h1>Produtos</h1>
         <p>Lorem ipsum dolor sit amet, consectetur</p>

         <button>
            <a href="check-out">Confira</a>
         </button>
        </div>
     </div>
    </div>
   </section>
  )
}

export default Products;
