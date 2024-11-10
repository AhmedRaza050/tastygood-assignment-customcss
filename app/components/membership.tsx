import Link from "next/link";
import React from "react";

function Membership() {
  return (
    <div style={{}}>
      <div>
        <img
          src="/membership.png"
          alt="hero image"
          style={{ width: "100%", height: "450px" }}
        />
      </div>
      <div style={{ position: "absolute", top: "2240px", left: "80px" }}>
        <h3
          style={{
            fontWeight: "bolder",
            lineHeight: "43px",
            fontSize: "38px",
            color: "#ffffff",
          }}
        >
          Get Our
        </h3>
        <h1
          style={{
            fontWeight: "bolder",
            lineHeight: "43px",
            letterSpacing: "0px",
            margin: "10px 0px 0px 0px",
            fontSize: "60px",
            color: "#FFC700",
          }}
        >
          MEMBERSHIP
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Get a special offers and other exclusive services by <br />
          owing a membership.
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
            fontSize: "18px",
          }}
        >
          <Link href="#"> learn More</Link>
        </button>
      </div>
      <div>
        <img
          src="/visaCard.png"
          alt="membership cards"
          style={{
            width: "507px",
            height: "324px",
            position: "absolute",
            top: "2200px",
            left: "690px",
          }}
        />
      </div>
    </div>
  );
}

export default Membership;
