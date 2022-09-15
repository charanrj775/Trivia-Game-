import React from "react";

export default function LandingPage(props) {
  return (
    <div className="flex-wrapper">
      <div className="content">
        <h1>Trivia Game</h1>
        <p>
          {" "}
          Test your knowledge! When you start the game, you will have to answer
          5 random questions. Good luck!
        </p>
        <button className="quizzical-button" onClick={props.onStart}>
          {" "}
          Get Start
        </button>
      </div>
      <div className="footer">
        <footer> made by charansingh </footer>
      </div>
    </div>
  );
}
