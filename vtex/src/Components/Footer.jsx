import React from 'react'
import "./styles/Footer.scss";

import Facebook from "/assets/Facebook.svg";
import Instagram from "/assets/Instagram.svg";
import Youtube from "/assets/Youtube.svg";
import Visa from "/assets/Visa.svg";
import Elo from "/assets/Elo.svg";
import Alelo from "/assets/Alelo.svg";
import Dinners from "/assets/Dinners.svg";
import Ifood from  "/assets/Ifood.svg";
import Mastercard from "/assets/Mastercard.svg";
import Pix from "/assets/Pix.svg";
import Amex from "/assets/Amex.svg";
import Ticket from "/assets/Ticket.svg";
import Sodexo from "/assets/Sodexo.svg";


const Footer = () => {
  return (
    <footer>
     <div className="column">
    <div className="about">
     <p>Sobre nós</p>
     <ul>
        <li>
            <a href="know">Conheça</a>
        </li>

        <li>
            <a href="buy">Como comprar</a>
        </li>

        <li>
            <a href="discount">Indicação e desconto</a>
        </li>
     </ul>

<div className="social-media">
    <div>
    <a href="#facebook">
    <img src={Facebook} alt="Facebook" />
    </a>
</div>
<div>
   <a href="#instagram">
   <img src={Instagram} alt="Instagram" />
    </a>
</div>

<div>
    <a href="#youtube">
    <img src={Youtube} alt="Youtube" />    
    </a>
</div>
</div>
</div>
</div>

{/* Coluna Informações Úteis */}
<div className="column">  
<div className="information">
   <p>Informações Úteis</p> 
   <ul>
        <li>
          <a href="#fale-conosco">Fale conosco</a>
        </li>
        <li>
          <a href="#duvidas">Dúvidas</a>
        </li>
        <li>
          <a href="#prazos-de-entrega">Prazos de entrega</a>
        </li>
        <li>
          <a href="#formas-de-pagamento">Formas de pagamento</a>
        </li>
        <li>
          <a href="#-politica-de-privacidade">Política de privacidade</a>
        </li>
        <li>
          <a href="#-trocas-e-devolucoes">Trocas e devoluções</a>
        </li>
      </ul>
</div>
</div>


{/* Coluna Formas de Pagamento */}
<div className="column">
    <div className="payments">
    <p>Formas de pagamneto</p>
    <div className="payment-methods">
        <div className="payment-row">
    <a href="#visa">
    <img src={Visa} alt="Visa" />
    </a>
  <a href="#elo">
     <img src={Elo} alt="Elo" />
          </a>
    <a href="#alelo">
    <img src={Alelo} alt="Alelo" />
    </a>
</div>
<div className="payment-row">
    <a href="#dinners">
    <img src={Dinners} alt="Dinners" />
    </a>

    <a href="#ifood">
    <img src={Ifood} alt="Ifood" />
    </a>

    <a href="#mastercard">
    <img src={Mastercard} alt="Mastercard" />
    </a>
</div>
<div className="payment-row">
    <a href="#pix">
    <img src={Pix} alt="Pix" />
    </a>

    <a href="#amex">
    <img src={Amex} alt="American Express" />
    </a>

    <a href="#ticket">
    <img src={Ticket} alt="Ticket" />
    </a>
</div>
<div className="payment-row">
    <a href="#sodexo">
    <img src={Sodexo} alt="Sodexo" />
    </a>
</div>
</div>
</div>
</div>


{/* Coluna de Newsletter */}
<div className="column">
<div className="newsletter">
<h1 className="title-one">Cadastre-se e receba nossas</h1>
<h1 className="title-two">Novidades e promoções</h1>
<p className="newsletter-subtitle">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
</p>

<form className="newsletter-form">
<input type="text" id="email" placeholder="Seu e-mail" required/>
<button type="submit">
    <a href="#ok">OK</a>
</button>
</form>
</div>
</div>


</footer>
  )
}

export default Footer;
