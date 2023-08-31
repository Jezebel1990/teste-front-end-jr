import React , { useState } from 'react';
import "/src/Components/styles/main/BrowseMarks.scss";
import Vtex from "/assets/Logo.svg";
import ArrowBlueR from "/assets/ArrowBlueR.svg";
import RelatedProducts from './RelatedProducts';
import SeeAll from './SeeAll';


const BrowseMarks = () => {
const [showRelatedProducts, setShowRelatedProducts] = useState(false);
const [showSeeAll, setShowSeeAll] = useState(false);

const handleSeeAllClick = () => {
  setShowRelatedProducts(!showRelatedProducts);
  setShowSeeAll(!showSeeAll);
}


  return (
    <div className="browse-marks">
    <p className="browse">Navegue por marcas</p>
    <div className="marks">
    <div className="mark">
     <a href="#vtex">
     <img src={Vtex}  alt="Vtex Mark"/>
     </a>
    </div>

    <div className="mark">
     <a href="#vtex">
     <img src={Vtex}  alt="Vtex Mark"/>
     </a>
    </div>

    <div className="mark">
     <a href="#vtex">
     <img src={Vtex}  alt="Vtex Mark"/>
     </a>
    </div>

    <div className="mark">
     <a href="#vtex">
     <img src={Vtex}  alt="Vtex Mark"/>
     </a>
    </div>

    <div className="mark-end">
     <a href="#vtex">
     <img src={Vtex}  alt="Vtex Mark"/>
     </a>

     <div className="ArrowBlue">
    <div className="Arrow">
      <span onClick={handleSeeAllClick}>
      <img src={ArrowBlueR}  alt="Arrow blue"/></span>
      
    </div>
    </div>
     </div>
    </div>
    {showRelatedProducts && <RelatedProducts />}
    {showSeeAll && <SeeAll />}
    </div>
    
    
  );
}

export default BrowseMarks;
