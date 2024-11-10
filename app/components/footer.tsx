import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F03153",
        color: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "100px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* name */}
        <div style={{ margin: "0px 0px 20px 40px" }}>
          <h1
            style={{
              fontWeight: "bolder",
              color: "#ffffff",
              lineHeight: "15px",
              letterSpacing: "0px",
              margin: "20px 0px 0px 60px",
              fontSize: "24px",
            }}
          >
            TASTY <br />
            GOOD
          </h1>
        </div>

        {/* Social Media  */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            fontSize: "20px",
            alignItems: "center",
            textAlign: "center",
            marginRight: "470px",
          }}
        >
          <span>
            <FaFacebook />
          </span>
          <span>
            {" "}
            <FaInstagram />
          </span>
          <span>
            {" "}
            <FaTwitter />
          </span>
          <span>
            {" "}
            <FaYoutube />
          </span>
          <span>
            {" "}
            <FaTiktok />
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "100px",
          marginRight: "50px",
          marginTop: "30px",
        }}
      >
        {/* reach us */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              Reach us
            </h3>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px 0 20px 0px",
                fontSize: "15px",
              }}
            >
              <FiPhoneCall /> +628123111179
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px 0 20px 0px",
                fontSize: "15px",
              }}
            >
              <IoIosMail style={{ fontSize: "20px" }} /> tastygood@gmail.com
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px 0px 20px 0px",
                fontSize: "15px",
              }}
            >
              <MdLocationPin style={{ fontSize: "20px" }} /> ABC Town, JAKARTA
            </p>
          </div>

          {/* lists*/}

          <div style={{ flex: "1 1 20%", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Quick Links
            </h3>
            <ul
              style={{ listStyleType: "none", padding: "0", marginTop: "25px" }}
            >
              <li style={{ margin: "5px 0 20px 0px", fontSize: "15px" }}>
                Contact Us
              </li>
              <li style={{ margin: "5px 0 20px 0px", fontSize: "15px" }}>
                Payment Shipping
              </li>
              <li style={{ margin: "5px 0 20px 0px", fontSize: "15px" }}>
                FAQs
              </li>
              <li style={{ margin: "5px 0 20px 0px", fontSize: "15px" }}>
                Tracking Orders
              </li>
            </ul>
          </div>
        </div>

        {/* box*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px",
            padding: "20px",
            backgroundColor: "#F4F5F7",
            color: "#000",
            borderRadius: "8px",
            maxWidth: "400px",
            height: "130px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h3 style={{ fontWeight: "bold" }}>
              Join Our{" "}
              <span style={{ color: "#F03153", fontWeight: "bolder" }}>
                Newsletter
              </span>
            </h3>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: "1",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px 0 0 10px",
                  outline: "none",
                  background: "#F4F5F7",
                }}
              />
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "0 10px 10px 0",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* copyrigth */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>
          &copy; 2023 Tasty Good.{" "}
          <span style={{ fontSize: "12px" }}>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
