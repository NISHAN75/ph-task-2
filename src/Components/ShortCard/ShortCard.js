import React from "react";

const ShortCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 my-20">
      <div class="card w-full bg-base-100  text-center shadow-xl">
        <div class="card-body text-xxl font-bold">
          <h2 className="text-xl">Latest Top Skills</h2>
          <p>Create your free account now and get immediate access to 100s of courses.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
      <div class="card w-full bg-base-100 text-center shadow-xl">
        <div class="card-body text-xxl font-bold">
          <h2 className="text-xl">Learn Online</h2>
          <p>Both day and boarding students benefit from the resources, diversity and activities of Masters.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
      <div class="card w-full bg-base-100 text-center shadow-xl">
        <div class="card-body text-xxl font-bold">
          <h2 className="text-xl">Industry Experts</h2>
          <p>Both day and boarding students benefit from the resources, diversity and activities of Masters.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
