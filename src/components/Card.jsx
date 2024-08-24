import React from "react";

const Card = ({ imgURL, title, description, superValue }) => {
  return (
    <div className="d-flex flex-column justify-content-between gap-2 p-4 bg-black text-white h-100 rounded-3">
      <img className="h-50 w-25" src={imgURL} alt="img not found" />
      <div>
        <div className="pb-1 fw-bold pale-color font3">{title}</div>
        <div className="pb-0 dull-color font5">
          {description}
          {superValue && <sup>{superValue}</sup>}
        </div>
      </div>
    </div>
  );
};

export default Card;
