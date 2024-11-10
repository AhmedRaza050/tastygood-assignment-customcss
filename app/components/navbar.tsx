import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "64px",
        background: "#F4F5F7",
      }}
    >
      {/* logo */}
      <div>
        <h1
          style={{
            fontWeight: "bolder",
            color: "#F03153",
            lineHeight: "15px",
            letterSpacing: "0px",
            margin: "20px 0px 0px 60px",
            fontSize: "24px",
          }}
        >
          {" "}
          <Link href="/">
            TASTY <br />
            GOOD
          </Link>
        </h1>
      </div>
      {/* menu + button  */}
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "60px" }}
      >
        {/* MENU LINKS */}
        <ul
          style={{
            display: "flex",
            gap: "43px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/reservation">Reservation</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>

        {/* ORDER BUTTON */}
        <button
          style={{
            marginLeft: "40px",
            width: "93px",
            height: "35px",
            fontWeight: "bold",
            borderRadius: "35px",
            background: "#F03153",
            color: "#ffffff",
            padding: "0px 2px 0px 2px",
            fontSize: "15px",
          }}
        >
          <Link href="/"> Order Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
