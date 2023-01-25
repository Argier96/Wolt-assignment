import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Style.css";

//surcharge from delivery fee
const cartValueMoney = () => {
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
  const deliveryDistance = 2000;
  const fractionDistance = 500;
  const baseDistance = 1000;
  const baseFee = 2;
  let deliveryDistanceFee = 0;

  if (deliveryDistance < baseDistance) {
    return deliveryDistanceFee;
  }

  if (deliveryDistance === 1000) {
    deliveryDistanceFee = baseFee;
    return deliveryDistanceFee;
  } else if (deliveryDistance > 1000) {
    const surchargeDistance = deliveryDistance - baseDistance;
    const multiple = surchargeDistance / fractionDistance;
    let baseMultiple = Math.floor(multiple);
    const tailingMultiple = surchargeDistance - baseMultiple * fractionDistance;

    if (tailingMultiple > 0) {
      ++baseMultiple;
    }
    console.log(baseFee + baseMultiple);
    return baseFee + baseMultiple;
  }
};

//delivery fee based on number of items

const feeBasedOnNumberOfItems = () => {
  const numberOfItems = 14;
  let deliverySurcharge = 0;
  if (numberOfItems < 5) {
    deliverySurcharge = 0;
  } else if (numberOfItems === 5) {
    deliverySurcharge = 0.5;
  } else if (numberOfItems > 5 && numberOfItems < 12) {
    deliverySurcharge = 0.5 + (numberOfItems - 5) * 0.5;
  } else if (numberOfItems > 12) {
    deliverySurcharge = 0.5 + (numberOfItems - 5) * 0.5 + 1.2;
  }
  return deliverySurcharge;
};

//final delivery dee
const finalDeliveryfee = () => {
  const CartValueMoney = cartValueMoney();
  const numberOfItemsSurcharge = feeBasedOnNumberOfItems();
  const distanceBasedFee = feeBasedOnDeliveryDistance();
  let finalDeliveryfee;
  if (CartValueMoney >= 100) {
    finalDeliveryfee = 0;
  } else {
    const finalDeliveryfees = numberOfItemsSurcharge + distanceBasedFee;
    if (finalDeliveryfees >= 15) {
      finalDeliveryfee = 15;
    } else {
      finalDeliveryfee = finalDeliveryfees;
    }
  }
  return finalDeliveryfee;
};

function Calculator() {
  const deliverFee = finalDeliveryfee();
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
        <p>{deliverFee}€</p>
      </div>
      <div className="footerDiv"></div>
    </div>
  );
}

export default Calculator;
