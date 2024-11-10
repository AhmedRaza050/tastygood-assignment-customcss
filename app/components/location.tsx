import Link from "next/link";
import React from "react";

function Location() {
  return (
    <div style={{ background: "#F4F5F7", height: "480px", width: "100%" }}>
      <div style={{ position: "absolute", top: "2700px", left: "80px" }}>
        <h3
          style={{
            fontWeight: "bolder",
            lineHeight: "43px",
            fontSize: "38px",
            color: "#000000",
          }}
        >
          Our Restaurant
        </h3>
        <h1
          style={{
            fontWeight: "bolder",
            lineHeight: "43px",
            letterSpacing: "0px",
            margin: "10px 0px 0px 0px",
            fontSize: "60px",
            color: "#F03153",
          }}
        >
          LOCATIONS
        </h1>
        <p
          style={{
            color: "#000000",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          we are available in{" "}
          <span style={{ color: "#F03153" }}>
            JAKARTA, BANDUNG,
            <br /> SURABAYA,
          </span>{" "}
          and <span style={{ color: "#F03153" }}>BALI</span>.
        </p>
        <button
          style={{
            marginTop: "20px",
            width: "157px",
            height: "56px",
            fontWeight: "bolder",
            borderRadius: "35px",
            border: "3px solid #F03153",
            color: "#F03153",
            padding: "0px 2px 0px 2px",
            fontSize: "18px",
          }}
        >
          <Link href="#"> learn More</Link>
        </button>
      </div>
      <div>
        <img
          src="/map.png"
          alt="membership cards"
          style={{
            width: "593px",
            height: "317px",
            position: "absolute",
            top: "2640px",
            left: "670px",
          }}
        />
      </div>
    </div>
  );
}

export default Location;
