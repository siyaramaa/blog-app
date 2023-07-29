"use client";
import Image from "next/image";
import React from "react";

function NewsLetter() {
  return (
    <div className="mx-auto flex h-96 max-w-screen-xl p-6 justify-around  bg-gradient-to-r from-transparent to-yellow-50 dark:from-inherit dark:to-inherit relative">
        <Image
          src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
          alt="newsletterImage"
          className="rounded-md backgroundImg -z-10 object-cover object-center"
          fill
        />

      <div className="rightSide  flex flex-col  justify-around items-center">
        <div className="textContainer space-y-7">
          <strong className="block text-center text-xl font-bold sm:text-3xl ">
            Sign up for our newsletter
          </strong>
          <p className="font-serif max-w-sm text-center text-base leading-5">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium  transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
