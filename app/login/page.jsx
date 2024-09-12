"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "../component/TextInput/index";
import Button from "../component/Button/index";
import './style.css';
import Link from "next/link";
import Checkbox from "../component/CheckBox";

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (value) => {
    console.log(value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main className="Login min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6 md:flex md:space-x-10 bg-white shadow-lg rounded-lg md:max-w-4xl">
        {/* Left Content - Image */}
        <div className="left__content hidden md:block md:w-1/2">
          <Image
            src={'/assets/images/login.png'}
            width={600}
            height={600}
            alt="Login Banner Image"
            className="rounded-lg"
          />
        </div>

        {/* Right Content - Login Form */}
        <div className="right__content w-full md:w-1/2">
          <div className="title text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-700">Welcome<span className="text-primary">👋</span></h1>
            <p className="welcome__message text-gray-500">Please Login Here</p>
          </div>

          <form className="login__form space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <TextInput
              name="email"
              placeholder="Email"
              label="Email"
              register={register}
              errors={errors}
              type="email"
              rules={{
                required: "This Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please provide a valid email (e.g., abc@gmail.com).",
                },
                maxLength: {
                  value: 30,
                  message: "This Email must not exceed 30 characters",
                },
              }}
            />

            {/* Password Input */}
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

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
              <Checkbox
                label="Remember Me"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id="terms"
              />
              </div>

              <Link href="/forgot-password" className="text-sm text-primary-700">Forgot Password?</Link>
            </div>

            {/* Login Button */}
            <Button type="submit">Login</Button>

            {/* Social login icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <Image src={'/assets/icon/google.png'} width={25} height={20} alt="Google Icon" />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icon/facebook.png" width={25} height={20} alt="Facebook Icon" />
              </Link>
              <Link href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icon/apple.png" width={25} height={20} alt="Apple Icon" />
              </Link>
            </div>

            {/* Signup Link & Checkbox */}
            <div className="flex justify-center items-left mt-4 space-x-4">
              <h3 className="font-bold">Create An Account</h3>
              <Link href="/signup" className="text-blue-500">Sign up</Link>


            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
