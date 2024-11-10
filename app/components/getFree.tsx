import Link from "next/link";
import React from "react";

function GetFree() {
  return (
    <div style={{ paddingTop: "21px" }}>
      <div>
        <img
          src="/getFree.png"
          alt="hero image"
          style={{ width: "100%", height: "450px" }}
        />
      </div>
      <div style={{ position: "absolute", top: "1320px", left: "80px" }}>
        <h3
          style={{ fontWeight: "bolder", fontSize: "28px", color: "#ffffff" }}
        >
          Get free
        </h3>
        <h1
          style={{
            fontWeight: "bolder",
            lineHeight: "55px",
            letterSpacing: "0px",
            margin: "10px 0px 0px 0px",
            fontSize: "70px",
            color: "#ffffff",
          }}
        >
          Fried <br />
          <span>Wonton</span>
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          For every purchase NUKE BURGERS <br />
          variants
        </p>
        <button
          style={{
            marginTop: "20px",
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
          <Link href="#"> learn More</Link>
        </button>
      </div>
    </div>
  );
}

export default GetFree;
