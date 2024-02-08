import React from "react";

import CarouselEffect from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import LayOut from "../../Components/LayOut/LayOut";
// import Product from "../../Components/Products/Product";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      {/* <Product /> */}
    </LayOut>
  );
}

export default Landing;