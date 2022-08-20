import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id,name,description,price,img}=service;
  
  return (
    <div class="card w-full bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div class="card-actions">
          <button class="btn btn-primary"><Link to={`/services/${id}`}>Enroll Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Service;
