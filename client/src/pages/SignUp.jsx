import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 flex py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shree Dharshana's
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            This is a demo project. you can sign up with your email and password
            or with google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label>User Name</Label>
              <TextInput type="text" placeholder="Username"></TextInput>
            </div>
            <div>
              <Label>Password</Label>
              <TextInput type="text" placeholder="Password"></TextInput>
            </div>
            <div>
              <Label>Email ID</Label>
              <TextInput
                type="email"
                placeholder="name@company.com"
              ></TextInput>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
