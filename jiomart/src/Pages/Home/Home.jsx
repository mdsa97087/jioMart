import React from "react";
import Carousel from "../SlideImage/SlideImage";
import { Link } from "react-router-dom";
import AddToCartButton from "../Cart/AddToCartButton";
import "./Home.css";

function Home() {
  return (
    <>
      <div
        className="AllMainDiv"
        // style={{
        //   marginTop: "100px",
        //   gap: "10px",
        // }}
      >
        <Carousel />
        <Link>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1672248605_1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg"
            alt=""
          />
        </Link>
        <Link>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1672247327_Food-Granins_1680x320.jpg"
            alt=""
          />
        </Link>
      </div>
      <div>
        <img
          src="https://www.jiomart.com/images/product/150x150/490415534/vaseline-intensive-care-deep-moisture-lotion-400-ml-product-images-o490415534-p490415534-0-202203151743.jpg
        "
          alt=""
        />
        <h1>hello</h1>
        <h6>Price</h6>
      </div>
      <AddToCartButton />
    </>
  );
}

export default Home;
