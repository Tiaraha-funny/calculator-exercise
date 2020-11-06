import React from "react";

function App() {
  return (
    <div id="wrapper">
      <div id="calculator">
        <div className="top">
          <span className="clear">C</span>
          <div className="screen"></div>
        </div>

        <div className="keys">
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="operator">+</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span className="operator">-</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className="operator">÷</span>
          <span>0</span>
          <span>.</span>
          <span className="eval">=</span>
          <span className="operator">x</span>
        </div>
      </div>

      <div id="about">
        <h1>A calculator web app for your iPhone</h1>
        <p>
          It features <strong>less options</strong> than your current calculator
          and <strong>doesn't work so well</strong> either.
        </p>
        <p>Simply add this page to your Home Screen. </p>
      </div>
    </div>
  );
}

export default App;