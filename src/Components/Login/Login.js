import React, { useEffect, useRef, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import Loading from "../Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  const [auth] = useAuth();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, ResetSending, ResetError] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setEmail(data.email);
    signInWithEmailAndPassword(data.email, data.password);
    
    reset();
  };


  let errorElement;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate]);

  if (error || gError || ResetError) {
    errorElement = (
      <p className="text-red-500 mb-5">
        <small>
          {error?.message || gError?.message || ResetError?.message}
        </small>
      </p>
    );
  }
  if (loading || gLoading || ResetSending) {
    return <Loading></Loading>;
  }

  const resetEmail = async (email) => {
    await sendPasswordResetEmail(email);
    console.log(email);
    if (email) {
       
      toast("Sent email");
    }
  };
  if(user ||  gUser){
    navigate('/');
    toast('Your Login is Successfully')
  }
  return (
    <section className=" flex h-2/3 justify-center items-center my-10 ">
      <div className="card card-compact w-96 shadow-xl">
        <div className="card-body w-full">
          <h2 className="card-title  justify-center mb-10 text-primary">
            Please Login
          </h2>
          <div className="card-actions justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-80 max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Enter a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-80 max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must Be enter 6 characters or Longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorElement}
              <input
                className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
                type="submit"
                value="Login"
              />
            </form>
            <p className="text-xl text-primary text-center">
              <small>
                <Link to="/register" className="text-primary font-bold">
                  You hava No account ? Please Register
                </Link>
              </small>
            </p>
            <button><p
              className="text-xl text-primary text-center"
             
            >
              <small  onClick={() => resetEmail(email)} className="text-primary font-bold">Reset Your Password?</small>
            </p></button>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary  text-white font-bold text-xxl hover:bg-white hover:text-black"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
