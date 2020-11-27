import React from "react";

function CalculatorsComponents({ handleClick }) {
  return (
    <div id="wrapper">
      <div id="calculator">
        <div className="top">
          <span onClick={handleClick} className="clear">C</span>
          <div className="screen"></div>
        </div>

        <div className="keys">
          <span onClick={handleClick}>7</span>
          <span onClick={handleClick}>8</span>
          <span onClick={handleClick}>9</span>
          <span onClick={handleClick} className="operator">+</span>
          <span onClick={handleClick}>4</span>
          <span onClick={handleClick}>5</span>
          <span onClick={handleClick}>6</span>
          <span onClick={handleClick} className="operator">-</span>
          <span onClick={handleClick}>1</span>
          <span onClick={handleClick}>2</span>
          <span onClick={handleClick}>3</span>
          <span onClick={handleClick} className="operator">÷</span>
          <span onClick={handleClick}>0</span>
          <span onClick={handleClick}>.</span>
          <span onClick={handleClick} className="eval">=</span>
          <span onClick={handleClick} className="operator">x</span>
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

export default CalculatorsComponents;
