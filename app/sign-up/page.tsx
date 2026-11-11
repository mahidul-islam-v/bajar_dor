"use client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "../lib/auth-client";

const Page = () => {
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string}

    console.log(user)

    const { data, error } = await authClient.signUp.email({ ...user, callbackURL: "/" })
    
    if (data) {
      console.log("succex")
    }
    if (error) {
      console.log(error)
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center my-10">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
        <h3 className="text-sm text-[#1D271Fb3]">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </h3>
      </div>
      <Form
        className="flex w-fit flex-col gap-4  bg-white p-6 rounded-2xl shadow-md"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField name="name">
          <Label>নাম</Label>
          <Input placeholder="যেমন: রহিম উদ্দিন" className="w-full" />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>ইমেইল</Label>
          <Input placeholder="you@example.com" className="w-full" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "কমপক্ষে ৮ অক্ষর";
            }
            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>
          <Input
            placeholder="কমপক্ষে ৮ অক্ষর"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "কমপক্ষে ৮ অক্ষর";
            }
            if (value !== password) {
              return "পাসওয়ার্ড মিল হয়নি";
            }
            return null;
          }}
        >
          <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
          <Input placeholder="আবার লিখুন" className="w-full" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            className="btn btn-success bg-[#05893E] text-white text-sm w-full"
          >
            সাইন আপ
          </Button>
        </div>
        <div className="divider my-0 text-[12px] ">অথবা</div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <button className="btn bg-black text-white font-semibold border-black text-sm rounded-xl px-3 py-2.5">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </button>
            <button className="btn bg-white text-black font-semibold border-[#e5e5e5] text-sm rounded-xl px-3 py-2.5">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Google দিয়ে চালিয়ে যান
            </button>
          </div>
          <div className="text-sm text-center">
            অ্যাকাউন্ট আছে?{" "}
            <Link href="/sign-in" className=" text-[#05893E]">
              সাইন ইন করুন
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Page;
