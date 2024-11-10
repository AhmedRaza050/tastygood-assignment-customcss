import Link from "next/link";
import React from "react";

function Reservation() {
  return (
    <div style={{}}>
      <div>
        <img
          src="/reservation.png"
          alt="hero image"
          style={{ width: "100%", height: "450px" }}
        />
      </div>
      <div style={{ position: "absolute", top: "1830px", left: "650px" }}>
        <h3
          style={{
            fontWeight: "bolder",
            fontSize: "38px",
            lineHeight: "43px",
            color: "#ffffff",
            textAlign: "right",
          }}
        >
          Get Your
        </h3>
        <h1
          style={{
            fontWeight: "bolder",
            lineHeight: "43px",
            letterSpacing: "0px",
            margin: "10px 0px 0px 0px",
            fontSize: "70px",
            color: "#ffffff",
          }}
        >
          RESERVATION
        </h1>

        <button
          style={{
            marginTop: "20px",
            marginLeft: "320px",
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
          <Link href="/reservation"> Book Now!</Link>
        </button>
      </div>
    </div>
  );
}

export default Reservation;
