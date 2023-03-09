import React from "react";
import "./Features.scss";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="container">
          <div className="item">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <h5>The best for every budget</h5>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <h5>Quality work done quickly</h5>
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <h5>Protected payments, every time</h5>
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not
              released until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <h5> 24/7 support</h5>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
