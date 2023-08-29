import React , { useState, useEffect } from 'react';
import "/src/Components/styles/main/MobileCard.scss";
import Close from "/assets/Close.svg";
import Plus from "/assets/Plus.svg";
import Minus from "/assets/Minus.svg";



function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function Items({
    isVisible,
    noVisible,
    productName,
    descriptionShort,
    photo,
    price,
}) {
     
  const [quantity, setQuantity] = useState(1); // Quantidade inicial como 1

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!isVisible) { 
    return null; //Diferente de isVisible, traz dados nulos.
  };

  const formattedPrice = formatPrice(price);

  return (
  <section className="items-container">
    <div className="items">
    <button onClick={noVisible} className="noVisible">
      <img src={Close} alt="Close" />
    </button>

    <div className="items-photo">
<img src={photo} alt={productName} />
</div>

<div className="items-text">
    <h1 className="item-productName">{productName}</h1>
    <span className="item-price">{formattedPrice}</span>
    <p className="item-description">{descriptionShort}</p>

<section className="quantity-box">
<span className="quantity-minus" id="decrease"onClick={decreaseQuantity}>
<img src={Minus} alt="Minus" /></span>
<span className="quantity-display" id="quantity">{quantity}</span>
 <span className="quantity-plus" id="increase"onClick={increaseQuantity}>
  <img src={Plus} alt="Plus" />
  </span>
</section>

<button className="quantity-button">
<a href="#buy">Comprar</a>
</button>

   </div>
    </div>


  </section>
  );
}


function MobileCard() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(4); 


useEffect(() => {
  const loadItems = async () => {
   const itemsURL = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
    

  try {
    const response = await fetch(itemsURL);
    const json = await response.json();

    const itemsJSON = json.products;

    setItems(itemsJSON);
  } catch (error) {
    console.error("Erro ao carregar itens:", error);
  }
  };
  loadItems();
}, []);


const showMoreItems = () => {
  // Aumentar o número de itens para exibir
  setItemsToShow(itemsToShow + 4);
};

const showLessItems = () => {
  // Diminuir o número de itens para exibir, mínimo de 4
  if (itemsToShow > 4) {
    setItemsToShow(itemsToShow - 4);
  }
};


function visibleIs(item) {
    setSelectedItem(item);
    setVisible(true);
}

function visibleNo() {
    setVisible(false);
}
    

  return (
    <>
<button
 className="show-more-button"
 onClick={showMoreItems}>
</button>

<button
      className="show-less-button"
      onClick={showLessItems}>
    </button>

    <section className="cards">
    {items.slice(0, itemsToShow).map((item, index) => (
      <div key={index} className="card" onClick={() => visibleIs(item)}>
        <figure>
            <img 
             className="card-photo"
             src={item.photo}
             alt={item.productName}
            />
       <figcaption className="card-item">
          {item.productName}
       </figcaption>
        </figure>

      

<div className="card-one">
    <div className="card-price">
        <p>R$ 30,90</p>
            <p>{formatPrice(item.price)}</p>
    </div>

<div className="card-two">
    <p>ou 2x de R$ 49,95 sem juros</p>
    <span>Frete grátis</span>
</div>


<button className="card-button">
<a href="#buy">Comprar</a>
</button>
    </div>
        </div>
    ))}
    </section>

    <Items
     isVisible={visible}
     noVisible={visibleNo}
     photo={selectedItem?.photo}
     productName={selectedItem?.productName}
     price={selectedItem?.price}
     descriptionShort={selectedItem?.descriptionShort}
    />
    </>
  );
}

export default MobileCard;
