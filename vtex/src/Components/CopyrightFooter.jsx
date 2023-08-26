import React from 'react';
import "./styles/CopyrightFooter.scss";
import Econverse from "/assets/Econverse.svg";
import VtexLogo2 from "/assets/VtexLogo2.svg";


const CopyrightFooter = () => {
  return (
<footer className="copyright-footer">
<div className="column-footer">
<div className="copyright">
<div className="copyright-text">
<p>
Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
</p>
</div>
</div>
</div>


<div className="copyright-icones">
<div className="column-footer">
<a href="#econverse">
<img src={Econverse} alt="Econverse" />
</a>
<a href="#vtex">
<img src={VtexLogo2} alt="Vtex" />
</a>
</div>
</div>
</footer>
  )
}

export default CopyrightFooter
