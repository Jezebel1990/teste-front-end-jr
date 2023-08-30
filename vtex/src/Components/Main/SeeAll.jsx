import React, { useState } from 'react';
import "/src/Components/styles/main/SeeAll.scss";
import MobileCard from './MobileCard';


const SeeAll = () => {
    const [showMobileCards, setShowMobileCards] = useState(false);

    const handleSeeAllClick = () => {
        setShowMobileCards(!showMobileCards);
    }
  return (
    <>
    <div className="see-all">
      <span onClick={handleSeeAllClick}><p>Ver todos</p></span>
      {showMobileCards && <MobileCard />}
    </div>
    </>
  )
}

export default SeeAll;
