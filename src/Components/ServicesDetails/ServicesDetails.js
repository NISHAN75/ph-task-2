import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const ServicesDetails = () => {
  const { servicesId } = useParams();
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  return (
    <div className="grid h-screen place-items-center">
      <h3 className="text-4xl text-primary text-center">
        ServicesDetails:{servicesId}
      </h3>
      <div className="detalis-info">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold text-xl text-primary">welcome ,<span className="font-bold text-red-500">{user.displayName}</span></h2>
            <p  className="font-bold text-primary">
              Thanks for you Select this Course so Let's start new Journey and
              build your career
            </p>
            <div class="card-actions mt-2">
              <button class="btn btn-primary">Conform Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
