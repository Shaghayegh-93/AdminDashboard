"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const SingleUserPage = ({ params }) => {
  //   const params = useParams();
  console.log("params", params);

  return (
    <div className="flex basis-full gap-10 mt-5">
      <div className="bg-bg-color-soft h-max p-2 rounded-md font-bold basis-1/5 text-text-color-soft ">
        <div className="relative w-full h-60  rounded-md overflow-hidden mb-5">
          <Image
            className="  object-cover"
            fill
            alt="userIamge"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        text
      </div>

      <div className="bg-bg-color-soft p-5 rounded-md basis-4/5">
        <form className="flex flex-col gap-2  ">
          <label htmlFor="username">Username</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="text"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="email"
            name="eail"
            placeholder="example@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="password"
            name="password"
            placeholder="password"
          />
          <label htmlFor="username">Phone</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="tel"
            name="phone"
            placeholder="Phone"
          />
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="adress"
            rows="5"
            placeholder="Adress"
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          />

          <label htmlFor="address"> Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            placeholder="Choose a Category"
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          >
            <option value={false} selected>
              Is Admin?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="address"> Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            placeholder="Choose a Category"
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          >
            <option value={true} selected>
              Is Active?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button
            type="submit"
            className="bg-teal-600 p-3 rounded-md w-full  font-medium text-xl border-none mt-5"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
