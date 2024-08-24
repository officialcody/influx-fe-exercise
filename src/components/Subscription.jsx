import React from "react";
import star1 from "../Assets/teenyicons_star-solid-1.svg";
import star2 from "../Assets/teenyicons_star-solid-2.svg";
import star3 from "../Assets/teenyicons_star-solid.svg";
import uidata from "../uidata.json";
import Card from "./Card";
import { subscriptionImages } from "../Assets";

const Subscription = () => {
  return (
    <div className="container-fluid d-flex flex-lg-row flex-column-reverse py-lg-5 bg-dark">
      <div className="row mx-auto justify-content-center">
        <div className="col col-lg-4 col-12 text-white rounded-3 p-3">
          <div className="pb-4">
            <img className="pt-4" src={star1} alt="star1" />
            <img src={star2} alt="star2" />
            <img className="pt-4" src={star3} alt="star3" />
          </div>
          <h1>Reel Deal Monthly Movies</h1>
          <p className="dull-color font5">
            Your flexible monthly membership to the latest movies
          </p>
          <hr className="pt-4" />
          <h4 className="pb-4 font3">What is MVP Subscription?</h4>
          <ol className="fs-6 styled-list font5">
            <li className="py-2">
              MVP Subscription provides the member 1 movie credit per month
            </li>
            <li className="py-2">
              They can avail it at any Marcus theatre or Movie Tavern
            </li>
            <li className="py-2">
              Members earn 100 points and get a $5 reward redeemable on food and
              beverages + many more benefits
            </li>
          </ol>
          <div className="d-none d-lg-block">
            <button className="text-white bg-danger border border-danger p-3 m-3 rounded-2">
              Get started
            </button>
            <a href="/" className="text-white">
              Learn more
            </a>
          </div>
        </div>
        <div className="col col-lg-6 col-12 border-box px-2">
          <div className="row row-cols-md-3 row-cols-2 g-3">
            {uidata &&
              uidata.gridItems.map((gridItem, index) => (
                <div
                  key={gridItem.imageName + index}
                  className={`col ${
                    index === 2 || index === 3 ? " col-6 col-lg-3 " : ""
                  }`}
                >
                  <Card
                    imgURL={subscriptionImages[gridItem.imageName]}
                    title={gridItem.title}
                    description={gridItem.description}
                    superValue={gridItem.superValue}
                  />
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col col-10 mx-4 py-4 font8 fs-my dull-color">
              <p className="">
                <sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to
                Passport Credits only. Other fees apply to full-priced tickets.
              </p>
              <p className="">
                <sup>2</sup>Excludes alcoholic beverages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
