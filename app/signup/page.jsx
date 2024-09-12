"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import TextInput from "../component/TextInput/index";
import Button from "../component/Button/index";
import './style.css';
import Link from "next/link";

export default function Signup() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <main className="Login min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6 md:flex md:space-x-10 bg-white shadow-lg rounded-lg md:max-w-4xl">
        <div className="right__content w-full md:w-1/2">
          <div className="title text-left mb-6">
            <h1 className="text-2xl font-bold text-gray-700">
              Create New Account<span className="text-primary"></span>
            </h1>
            <p className="welcome__message text-gray-500">Please Enter Details</p>
          </div>

          <form className="login__form " onSubmit={handleSubmit(onSubmit)}>
            {/* First Name */}
            <TextInput
              name="firstname"
              placeholder="First Name"
              label="First Name"
              register={register}
              errors={errors}
              type="text"
              rules={{
                required: "First Name is required.",
                maxLength: {
                  value: 10,
                  message: "First Name must not exceed 10 characters.",
                },
              }}
            />

            {/* Last Name */}
            <TextInput
              name="lastname"
              placeholder="Last Name"
              label="Last Name"
              register={register}
              errors={errors}
              type="text"
              rules={{
                required: "Last Name is required.",
                maxLength: {
                  value: 10,
                  message: "Last Name must not exceed 10 characters.",
                },
              }}
            />

            {/* Email */}
            <TextInput
              name="email"
              placeholder="Email"
              label="Email"
              register={register}
              errors={errors}
              type="email"
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please provide a valid email (e.g., abc@gmail.com).",
                },
                maxLength: {
                  value: 30,
                  message: "Email must not exceed 30 characters.",
                },
              }}
            />

            {/* Password */}
            <TextInput
              name="password"
              type="password"
              label="Password"
              autoComplete="password"
              placeholder="Password"
              register={register}
              errors={errors}
              rules={{
                required: "Password is required.",
                maxLength: {
                  value: 30,
                  message: "Password must not exceed 30 characters.",
                },
              }}
            />

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="custom-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                />
                <label
                  htmlFor="custom-checkbox"
                  className="ml-2 text-sm font-medium text-gray-700">
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password" className="ml-auto text-sm text-primary-700">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button type="submit">Sign Up</Button>

            {/* Social login icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <Image src={'/assets/icon/google.png'} width={25} height={20} alt="Google Icon" />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icon/facebook.png" width={25} height={20} alt="Facebook Icon" />
              </Link>
              <Link href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icon/apple.png" width={20} height={20} alt="Apple Icon" />
              </Link>
            </div>

            {/* Signup link */}
            <div className="last text-center flex justify-center space-x-6 mt-4">
              <h3 className="font-bold">Already Have an Account?</h3>
              <Link href="/login" className="text-blue-500">Login</Link>
            </div>
          </form>
        </div>

        {/* Left Content - Image */}
        <div className="left__content hidden md:block md:w-1/2">
          <Image 
            src={'/assets/images/sign-up.png'}
            width={600}
            height={600}
            alt="Sign-up Banner Image"
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
