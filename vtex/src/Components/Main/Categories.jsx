import React from 'react';
import Technology from "/assets/Technology.svg";
import Supermarket from "/assets/Supermarket.svg";
import Drinks from "/assets/Drinks.svg";
import Tools from "/assets/Tools.svg";
import Health from "/assets/Health.svg";
import Race from "/assets/Race.svg";
import Fashion from "/assets/Fashion.svg";
import "/src/Components/styles/main/Categories.scss";


const Categories = () => {
  return (
   <section className="categories">
    <div className="category">
    <div className="category-box-one">
        <div className="category-img">
            <img src={Technology} alt="Technologies icon" />
        </div>
        </div>

 <p className="category-title">Tecnologia</p>
 </div>

   <div className="category">
    <div className="category-box">
        <div className="category-img">
            <img src={Supermarket} alt="Supermarket icon" />
        </div>
    </div>
    <p className="category-title">Supermercado</p>
</div>


<div className="category">
    <div className="category-box">
        <div className="category-img">
            <img src={Drinks} alt="Drinks icon" />
        </div>
    </div>
    <p className="category-title">Bebidas</p>
</div>

<div className="category">
    <div className="category-box">
        <div className="category-img">
            <img src={Tools} alt="Tools icon" />
        </div>
    </div>
    <p className="category-title">Ferramentas</p>
</div>

<div className="category">
    <div className="category-box">
        <div className="category-img">
            <img src={Health} alt="Health icon" />
        </div>
    </div>
    <p className="category-title">Saúde</p>
</div>

<div className="category">
    <div className="category-box">
        <div className="category-img">
            <img src={Race} alt="Race icon" />
        </div>
    </div>
    <p className="category-title">Esportes e Fitness</p>
</div>

<div className="category">
    <div className="category-box">
        <div className="category-img">
            <img src={Fashion} alt="Fashion icon" />
        </div>
    </div>
    <p className="category-title">Moda</p>
</div>
   </section>
  )
}

export default Categories
