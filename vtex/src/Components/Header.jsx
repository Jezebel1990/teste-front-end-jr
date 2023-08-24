import React from 'react'
import ShieldCheck from "/assets/ShieldCheck.svg";
import Truck from "/assets/Truck.svg";
import CreditCard from "/assets/CreditCard.svg";
import "./styles/Header.scss";

const Header = () => {
  return (
    <header>
    <div className="container-header-top">
   <div className="container-center">
    <div className="container-header">
    <img src={ShieldCheck} alt="Ícone check" />
    </div>

<div className="header-text">
Compras <span className='span'> 100% segura</span>
</div>
</div>
    
<div className="container-center">
<div className="container-header">
    <img src={Truck} alt="Ícone do caminhão" />
    </div>

    <div className="header-text">
    <span className='span'>Frente grátis </span>acima de R$ 200
    </div>
    </div>


<div className="container-center">
<div className="container-header">
     <img src={CreditCard} alt="Ícone cartão de crédito" />
     </div>

     <div className="header-text">
    <span className='span'>Parcele </span> suas compras
    </div>
    </div>
   </div>
   </header>
  );
}

export default Header;
