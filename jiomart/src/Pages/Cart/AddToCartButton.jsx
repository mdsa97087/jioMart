import React, { useContext, useState } from "react";
import { AuthContextProvider } from "../../Auth/AuthContext";

function AddToCartButton() {
  // const [state, setstate] = useState(false);
  // const [count, setCount] = useState(0);
  
  const {setstate,state,count,setCount} =useContext(AuthContextProvider)


  const clickCartAdd = () => {
    setstate(true);
    setCount(count + 1);
  };

  const backAddToCart = () => {
    count == 1 ? setCount(0) || setstate(false) : setCount(count - 1);
  };

  return (
    <>
      {/* --      ----- ADD TO CART     ----- */}
      <div
        style={{
          // border:'1px solid',
          height: "38px",
          width: "190px",
        }}
      >
        <button
          onClick={clickCartAdd}
          style={{
            // border: "1px solid",
            background: "rgb(3, 143, 203)",
            display: "flex",
            width: "180px",
            height: "40px",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 15px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <button
            style={{
              fontWeight: "600",
            }}
          >
            Add to Cart
          </button>
          <button>
            <img
              src="https://i.imgur.com/GaYPGjg.png
            "
              alt=""
              width="20px"
            />
          </button>
        </button>

        {state && (
          <div
            style={{
              // border: "1px solid red",
              width: "180px",
              height: "40px",
              position: "relative",
              top: "-40px",
              background: "white",
            }}
          >
            <div
              style={{
                // border: "1px solid green",
                display: "flex",
                alignItems: "center",
                width: "100px",
                height: "40px",
                justifyContent: "space-between",
                position: "relative",
                left: "70px",
              }}
            >
              <button
                // disabled={count == 0}
                onClick={backAddToCart}
                style={{
                  // border:'1px solid red',
                  background: "rgb(3, 143, 203)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  padding: "5px",
                }}
              >
                <img
                  src="https://i.imgur.com/5d5OBFy.png
              "
                  alt=""
                  width="20px"
                />
              </button>
              <span>{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                style={{
                  // border:'1px solid red',
                  background: "rgb(3, 143, 203)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  padding: "5px",
                }}
              >
                <img
                  src="https://i.imgur.com/GaYPGjg.png
              "
                  alt=""
                  width="20px"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddToCartButton;
