import React from "react";
import "./styles.css";
import { useState } from "react";

var foodDB = {
  Chinese: [
    { name: "Schezwan Rice", rating: "4/5" },
    { name: "Fried rice", rating: "3.5/5" }
  ],

  Mughlai: [
    { name: "Tandoori", rating: "5/5" },
    { name: "Brost", rating: "4.5/5" }
  ],
  Arabic: [
    { name: "Shawarma", rating: "3.5/5" },
    { name: "Khepsa", rating: "5/5" }
  ],
  Indian: [
    { name: "PavBhaji", rating: "3.5/5" },
    { name: "Chole Bhature", rating: "5/5" }
  ]
};

var foods = Object.keys(foodDB);

export default function App() {
  var [state, setState] = useState("Arabic");
  function genreClickHandler(genre) {
    setState(genre);
  }
  return (
    <div className="App">
      <div className="content">
        <h1>Foods Recommendation</h1>
        <p style={{ fontSize: "large" }}>
          {" "}
          Checkout my favorite foods and their ratings. Select a genre to get
          started{" "}
        </p>
      </div>

      <div className="container">
        {foods.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "5px",
              padding: "0.8rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {foodDB[state].map(function (food) {
            return (
              <li
                key={food.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div className="contents">
                  <div style={{ fontSize: "larger" }}>{food.name} </div>
                  <div style={{ fontSize: "smaller" }}>{food.rating} </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
