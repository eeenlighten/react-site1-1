import React from 'react';
import Contents from '../layout/Contents';
import BannerCont from '../includes/BannerCont';

function Banner() {
  return (
    <>
      <Contents>
        <BannerCont skill={["section", "gmarket"]} />
      </Contents>
    </>
  )
}

export default Banner;
