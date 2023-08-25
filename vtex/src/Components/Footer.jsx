import React from 'react'
import "./styles/Footer.scss";

import Facebook from "/assets/Facebook.svg";
import Instagram from "/assets/Instagram.svg";
import Youtube from "/assets/Youtube.svg";


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
</footer>
  )
}

export default Footer;
