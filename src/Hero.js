import React from 'react';
import banner from './banner.png';

function Hero() {
  return (
    <div id="hero" className="text-center text-sm-start py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="py-3">
            <p className="small text-primary m-0 mb-2">An Agency That Helps You</p>
            <h1 className="display-5 fw-bolder">
              Grow your Business
            </h1>
            <p className="py-1 lead text-black-50">
              Build an award winning website that grows your business with the help of Last Door. Our 15+ years of experience in building websites have grown businesses of 1000+ clients.
            </p>
            <button className="btn btn-info p-3 mt-3">Get Your Free Consultation Now</button>
          </div>
        </div>
        <div className="col">
          <div>
            <img
              className="d-none d-sm-block img-fluid"
              src={banner}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
