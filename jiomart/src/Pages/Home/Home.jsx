import React from "react";
import Carousel from "../SlideImage/SlideImage";
import { CircularProgress } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Nabvar from "../../Navbar/Nabvar";

function Home() {
  return (
    <>
      <div
        style={{
          marginTop: "100px",
          gap: "10px",
        }}
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
    </>
  );
}

export default Home;
