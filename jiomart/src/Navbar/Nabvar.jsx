import {
  Container,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Nabvar() {
  return (
    <div className="mainDivNavbar">
      <div className="NavbarDiv">
        <Link to="/logo">
          <img
            className="logo"
            src="https://i.imgur.com/IqJpOEs.png"
            alt=""
            width="35px"
          />
        </Link>
        <Link to="/">
          <span className="jiomart">JioMart</span>
          <sub className="sub">BETA</sub>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            width: "40vw",
            borderRadius: "8px",
          }}
        >
          <div>
            <input
              className="NavbarInput"
              type="text"
              placeholder="Search essentials , groceries, and more ..."
            />
          </div>
          <Link to="">
            <Popover>
              <PopoverTrigger>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-128/menu-542-1094182.png"
                  alt=""
                  width="20px"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton
                  style={{
                    color: "red",
                    background: "black",
                  }}
                />
                <PopoverHeader color="black">
                  Shop faster - type or paste your shopping list below
                </PopoverHeader>
                <PopoverBody
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button color="black">Clear</Button>
                  <Button bg="blue">Search Now</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Link>
        </div>
        <Link to="/login" className="cartNavbar">
          <div className="cartNavbar">
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              src="https://i.imgur.com/Z5Kzp8I.png"
              alt=""
            />
            <span> Sign in</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="cartNavbar">
            <img src="https://i.imgur.com/vrIMSiB.png" alt="" width={"30px"} />
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nabvar;
