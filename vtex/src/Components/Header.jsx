import React from 'react'
import ShieldCheck from "/assets/ShieldCheck.svg";
import Truck from "/assets/Truck.svg";
import CreditCard from "/assets/CreditCard.svg";
import Logo from "/assets/Logo.svg";
import IconSearch from "/assets/IconSearch.svg";
import Box from "/assets/Box.svg";
import Heart from "/assets/Heart.svg";
import User from "/assets/User.svg";
import ShoppingCart from "/assets/ShoppingCart.svg";
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

 <div className="navbar">
    <div className="logo">
        <a href="#logo">
    <img src={Logo} alt="Logo Vtex" />
    </a>
    </div>

<form>
    <input
    typeof="text"
    name=""
    id="input-form"
    placeholder="O que você está buscando?"
    required
    />
    <button type="submit" id="button-form">
    <img src={IconSearch} alt="Icon search" />
    </button>
</form>


<div className="icones">
    <div className="icone">
        <a href="box">
        <img src={Box} alt="Box" />
        </a>
    </div>

    <div className="icone">
        <a href="heart">
        <img src={Heart} alt="Heart" />
        </a>
    </div>

    <div className="icone">
        <a href="user">
        <img src={User} alt="Profile" />
        </a>
    </div>

    <div className="icone">
        <a href="shopphing">
        <img src={ShoppingCart} alt="Shopping cart" />
        </a>
    </div>
</div>
</div>

<nav className="nav-categories">
 <ul>
 <li>
  <a href="#categories">Todas as categorias</a>
  </li>

  <li>
  <a href="#supermarket">Supermercado</a>
</li>
<li>
 <a href="#books">Livros</a>
 </li>
<li>
<a href="#fashion">Moda</a>
</li>
<li>
 <a href="#launch">Lançamento</a>
</li>
<li>
 <a href="#offers" className="promotion">Ofertas do dia</a>
</li>
<li>
<a href="#signature">Assinatura</a>
</li>
 </ul>
</nav>
</header>
  );
}

export default Header;
