import React from "react";

const PopUp = props => {
  let { street, suite, city, zipcode } = props.address;
  let { left, top, width } = props.position;

  left = 1.5 * left + width + "px";
  top = top + "px";

  return (
    <div className="user-popup" style={{ left: left, top: top }}>
      <div>
        <strong>Street</strong> <span> {street} </span>{" "}
      </div>
      <div>
        <strong>Suite</strong> <span> {suite} </span>{" "}
      </div>
      <div>
        <strong>City</strong> <span>{city} </span>
      </div>
      <div>
        <strong>Zip</strong> <span> {zipcode} </span>{" "}
      </div>
    </div>
  );
};

export default PopUp;
