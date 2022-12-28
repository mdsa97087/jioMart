import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   dots: true,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669913386_1669808764_KV_1680x320.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672150254_RealmeHPMC.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672151930_Large-appliances-fest_1680x320.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672235198_OIL-BANNER-Desktop_New.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672147140_Fitness-Fest_3_1680x320.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672146585_FashionHPMCDesktop.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672147573_BeautyEssentialsDesktop.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672229150_MUMBAI.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672229150_MUMBAI.jpg",
      link: "",
    },
    {
      url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1672249288_HH_Banner-1680x320.jpg",
      link: "",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"300px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map(({ url, index, link }) => (
          <Link to={link}>
            <Box
              style={{
                height: "300px",
                position: "relative",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${url})`,
              }}
            ></Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}
