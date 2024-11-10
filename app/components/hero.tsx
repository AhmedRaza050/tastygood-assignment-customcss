import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div style={{ width: "100%", height: "691px" }}>
      <div>
        <img
          src="/main.png"
          alt="hero image"
          style={{ width: "100%", height: "550px" }}
        />
      </div>
      <div style={{ position: "absolute", top: "240px", left: "750px" }}>
        <div>
          <h3
            style={{ fontWeight: "bold", fontSize: "18px", color: "#ffffff" }}
          >
            Try our new meal
          </h3>
          <h1
            style={{
              fontWeight: "bolder",
              lineHeight: "53px",
              letterSpacing: "0px",
              margin: "10px 0px 0px 0px",
              fontSize: "80px",
            }}
          >
            {" "}
            <span style={{ fontWeight: "bolder", color: "#F03153" }}>
              {" "}
              DOUBLE{" "}
            </span>{" "}
            <br />{" "}
            <span style={{ fontWeight: "bolder", color: "#FFC700" }}>
              NUKE
            </span>{" "}
            <br />
            <span style={{ fontWeight: "bolder", color: "#ffffff" }}>
              {" "}
              BURGER{" "}
            </span>{" "}
          </h1>
        </div>
        <button
          style={{
            marginTop: "40px",
            width: "157px",
            height: "56px",
            fontWeight: "bolder",
            borderRadius: "35px",
            border: "4px solid #ffffff",
            color: "#ffffff",
            padding: "0px 2px 0px 2px",
            fontSize: "15px",
          }}
        >
          <Link href="#"> Order Now!</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
