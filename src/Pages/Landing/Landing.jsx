import React from "react";

import CarouselEffect from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import LayOut from "../../Components/LayOut/LayOut";
import Product from "../../Components/Products/Product";
import Footer from "../../Components/Footer/Footer"

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
      <Footer />
    </LayOut>

  );
}

export default Landing;