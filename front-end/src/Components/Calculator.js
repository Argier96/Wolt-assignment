import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Style.css";

function Calculator() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calcDiv">
      <div className="header">
        <h1> Delivery Fee Calculator</h1>
      </div>
      <div className="calcColumn">
        <form>
          <div className="calcDivItems">
            <p>Cart Value</p>
            <input className="cartValue" type={"float"}></input>
            <p>€</p>
          </div>
          <div className="calcDivItems">
            <p> Distance Delivery</p>
            <input className="deliveryDistance" type={"integer"}></input>
            <p>m</p>
          </div>
          <div className="calcDivItems">
            <p> Amount of items</p>
            <input className="deliveryDistance" type={"integer"}></input>
          </div>
          <div className="calcDivItems">
            <p> Time</p>
            <DateTimePicker onChange={onChange} value={value} />
          </div>
        </form>
      </div>
      <div className="resultColumn">
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
      <div className="footerDiv">

      </div>
    </div>
  );
}

export default Calculator;
