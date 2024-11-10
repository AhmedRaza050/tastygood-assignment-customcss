import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function TopMeal() {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        marginTop: "-140px",
        background: "#F4F5F7",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ fontWeight: "bolder", fontSize: "60px", color: "#F03153" }}
        >
          Our top five meals
        </h1>
        <h3
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            color: "#000000",
          }}
        >
          Try our five best meals today.
        </h3>
      </div>
      {/* card section start here */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "#F4F5F7",
        }}
      >
        {/* card 1 */}
        <div
          style={{
            height: "408px",
            width: "230px",
            borderRadius: "25px",
            border: "10px solid #00000",
            background: "#ffffff",
          }}
        >
          <div>
            <img
              src="/card_01.png"
              alt="card 01"
              style={{ height: "300px", width: "230px" }}
            />
          </div>
          <div
            style={{
              height: "78.35px",
              width: "218px",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                margin: "20px 0px 20px 10px",
              }}
            >
              Beef Frenzy Burger
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <span>
                Rs.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  970.00
                </span>
              </span>
              <button
                style={{
                  width: "90px",
                  height: "35px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "35px",
                  backgroundColor: "#F03153",
                  color: "#ffffff",
                }}
              >
                <Link href="#"> Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          style={{
            height: "408px",
            width: "230px",
            borderRadius: "25px",
            border: "10px solid #00000",
            background: "#ffffff",
          }}
        >
          <div>
            <img
              src="/card_02.png"
              alt="card 02"
              style={{ height: "300px", width: "230px" }}
            />
          </div>
          <div
            style={{
              height: "78.35px",
              width: "218px",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                margin: "20px 0px 20px 10px",
              }}
            >
              Nuke Burger
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <span>
                Rs.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  870.00
                </span>
              </span>
              <button
                style={{
                  width: "90px",
                  height: "35px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "35px",
                  backgroundColor: "#F03153",
                  color: "#ffffff",
                }}
              >
                <Link href="#"> Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          style={{
            height: "408px",
            width: "230px",
            borderRadius: "25px",
            border: "10px solid #00000",
            background: "#ffffff",
          }}
        >
          <div>
            <img
              src="/card_03.png"
              alt="card 03"
              style={{ height: "300px", width: "230px" }}
            />
          </div>
          <div
            style={{
              height: "78.35px",
              width: "218px",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                margin: "20px 0px 20px 10px",
              }}
            >
              Pizzeria
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <span>
                Rs.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  1230.00
                </span>
              </span>
              <button
                style={{
                  width: "90px",
                  height: "35px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "35px",
                  backgroundColor: "#F03153",
                  color: "#ffffff",
                }}
              >
                <Link href="#"> Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div
          style={{
            height: "408px",
            width: "230px",
            borderRadius: "25px",
            border: "10px solid #00000",
            background: "#ffffff",
          }}
        >
          <div>
            <img
              src="/card_04.png"
              alt="card 04"
              style={{ height: "300px", width: "230px" }}
            />
          </div>
          <div
            style={{
              height: "78.35px",
              width: "218px",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                margin: "20px 0px 20px 10px",
              }}
            >
              Nuke Burger Madness
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <span>
                Rs.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  1099.00
                </span>
              </span>
              <button
                style={{
                  width: "90px",
                  height: "35px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "35px",
                  backgroundColor: "#F03153",
                  color: "#ffffff",
                }}
              >
                <Link href="#"> Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
        {/* card 5*/}
        <div
          style={{
            height: "408px",
            width: "230px",
            borderRadius: "25px",
            border: "10px solid #00000",
            background: "#ffffff",
          }}
        >
          <div>
            <img
              src="/card_05.png"
              alt="card 05"
              style={{ height: "300px", width: "230px" }}
            />
          </div>
          <div
            style={{
              height: "78.35px",
              width: "218px",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "18px",
                margin: "20px 0px 20px 10px",
              }}
            >
              Pasta Tomato Sauce
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <span>
                Rs.{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  520.00
                </span>
              </span>
              <button
                style={{
                  width: "90px",
                  height: "35px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "35px",
                  backgroundColor: "#F03153",
                  color: "#ffffff",
                }}
              >
                <Link href="#"> Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
          background: "#F4F5F7",
        }}
      >
        <Link href="/menu">
          <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>
            See more menus{" "}
          </h3>
        </Link>
        <Link href="/menu">
          <IoIosArrowDown
            style={{
              color: "#F03153",
              fontWeight: "bolder",
              fontSize: "35px",
              paddingBottom: "10px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default TopMeal;
