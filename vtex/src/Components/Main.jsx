import React from 'react'
import Categories from './Main/Categories';
import RelatedProducts from './Main/RelatedProducts';
import MenuProducts from './Main/MenuProducts';
import MobileCard from './Main/MobileCard';
import PartnersCard from './Main/PartnersCard';

const Main = () => {
  return (
    <main>
   <Categories />
   <RelatedProducts />
   <MenuProducts />
   <MobileCard />
   <PartnersCard />
    </main>
  );
}

export default Main;
