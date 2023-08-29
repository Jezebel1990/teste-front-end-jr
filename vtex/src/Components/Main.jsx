import React from 'react'
import Categories from './Main/Categories';
import RelatedProducts from './Main/RelatedProducts';
import MenuProducts from './Main/MenuProducts';
import MobileCard from './Main/MobileCard';

const Main = () => {
  return (
    <main>
   <Categories />
   <RelatedProducts />
   <MenuProducts />
   <MobileCard />
    </main>
  );
}

export default Main;
