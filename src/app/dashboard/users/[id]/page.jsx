import React from "react";
import Image from "next/image";
import { fetchSingleUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);

  return (
    <div className="flex basis-full gap-10 mt-5">
      <div className="bg-bg-color-soft h-max p-2 rounded-md font-bold basis-1/5 text-text-color-soft ">
        <div className="relative w-full h-60  rounded-md overflow-hidden mb-5">
          <Image
            className="  object-cover"
            fill
            alt="userIamge"
            src={user.img || "/noavatar.png"}
          />
        </div>
        {user.username}
      </div>

      <div className="bg-bg-color-soft p-5 rounded-md basis-4/5">
        <form action={updateUser} className="flex flex-col gap-2  ">
          <input type="hidden" name="id" id="" value={user.id} />
          <label htmlFor="username">Username</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="text"
            name="username"
            placeholder={user.username}
          />
          <label htmlFor="email">Email</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="email"
            name="eail"
            placeholder={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="password"
            name="password"
            placeholder={user.password}
          />
          <label htmlFor="username">Phone</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="tel"
            name="phone"
            placeholder={user.phone}
          />
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="adress"
            rows="5"
            placeholder={user.address}
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          />

          <label htmlFor="address"> Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            placeholder={user.isAdmin}
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          >
            <option value={false}>Is Admin?</option>
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>

          <label htmlFor="address"> Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            placeholder={user.isActive}
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          >
            <option value={true} selected>
              Is Active?
            </option>
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
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
