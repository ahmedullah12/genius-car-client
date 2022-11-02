import React from "react";

const ServiceCart = ({ service }) => {
    const {img, title, price} = service
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="p-6">
        <img className="w-80 h-52  rounded-lg" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
