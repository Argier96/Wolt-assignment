import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Style.css";

//surcharge from delivery fee
const CartValueMoney = () => {
  const cartValue = 20;
  let newDeliveryPrice;
  if (cartValue < 10) {
    const surCharge = 10 - cartValue;
    newDeliveryPrice = cartValue + surCharge;
  } else {
    newDeliveryPrice = cartValue;
  }
  return newDeliveryPrice;
};

//calculating fee based on delivery distance
const feeBasedOnDeliveryDistance = () => {
  const deliveryDistance = 3250;
  const baseFeeAfterFirst1000 = 2;
  let deliveryDistanceFee;
  if (deliveryDistance < 500) {
    deliveryDistanceFee = 1;
  } else if (deliveryDistance > 500 && deliveryDistance <= 1000) {
    deliveryDistanceFee = 2;
  } else if (deliveryDistance > 1000) {
    const surchargeDistance = (deliveryDistance - 1000) / 500;
    console.log("Surcharge distance", surchargeDistance);
    if (surchargeDistance >= 1) {
      deliveryDistanceFee = baseFeeAfterFirst1000 + surchargeDistance * 1;
    }
  }

  return deliveryDistanceFee;
};

//delivery fee based on number of items

const feeBasedOnNumberOfItems = () => {
  const numberOfItems = 13;
  let deliverySurcharge;
  if (numberOfItems < 5) {
    deliverySurcharge = 0;
  } else if (numberOfItems === 5) {
    deliverySurcharge = 0.5;
  } else if (numberOfItems > 5 && numberOfItems < 12) {
    deliverySurcharge = 0.5 + (numberOfItems - 5) * 0.5;
  } else if (numberOfItems > 12) {
    deliverySurcharge = 0.5 + (numberOfItems - 5) *0.5+ 1.2;
  }
  return deliverySurcharge;
};

function Calculator() {
  const deliverDistanceFee = feeBasedOnNumberOfItems();
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
          <div className="calcDivItems">
            <button>Calculate</button>
          </div>
        </form>
      </div>
      <div className="resultColumn">
        <p>Delivery price: </p>
        <p>{deliverDistanceFee}€</p>
      </div>
      <div className="footerDiv"></div>
    </div>
  );
}

export default Calculator;
