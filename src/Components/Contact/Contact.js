import React from "react";

const Contact = () => {
  return (
    <div className="grid h-2/3 place-items-center my-20">
        <h3 className="text-4xl text-primary font-bold mb-10">Contact us</h3>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
        <input name="name" type="text" placeholder="Type Your Name" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="email" placeholder="Type Your Email" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="number" placeholder="Type Your number" class="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Type Your Address" class="input input-bordered input-primary w-full max-w-xs" />
        <input className="btn btn-primary" type="submit" value="submit"></input>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
