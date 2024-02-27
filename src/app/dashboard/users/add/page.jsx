import React from "react";

const AddUserPage = () => {
  return (
    <div className=" text-text-color mt-6 rounded-md ">
      <div className="flex bg-bg-color-soft rounded-md">
        <form className="p-5  flex justify-around gap-4 flex-wrap">
          <input
            className="bg-transparent w-[45%] bg-bg-color p-3 rounded-md border border-text-color-soft "
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <input
            className="bg-transparent w-[45%] bg-bg-color p-3 rounded-md border border-text-color-soft "
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="bg-transparent bg-bg-color p-3 rounded-md border border-text-color-soft  w-[45%]"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            className="bg-transparent bg-bg-color p-3 rounded-md border border-text-color-soft  w-[45%] "
            type="tel"
            placeholder="phone"
            name="phone"
          />
          <select
            name="isAdmin"
            id="isAdmin"
            placeholder="Choose a Category"
            className=" bg-transparent w-[45%] bg-bg-color p-3 rounded-md border border-text-color-soft "
          >
            <option value={false} selected>
              Is Admin?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <select
            name="isActive"
            id="isActive"
            placeholder="Choose a Category"
            className=" bg-transparent w-[45%] bg-bg-color p-3 rounded-md border border-text-color-soft "
          >
            <option value={true} selected>
              Is Active?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <textarea
            placeholder="Address"
            name="address"
            id="address"
            rows="10"
            className="p-5 rounded-md bg-bg-color border border-text-color-sof w-full mx-7"
          />
          <button
            type="submit"
            className="bg-teal-600 p-4 rounded-md w-full mx-7 font-bold text-xl border-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
