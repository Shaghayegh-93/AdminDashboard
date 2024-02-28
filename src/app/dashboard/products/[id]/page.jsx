"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const SingleProductPage = () => {
  //   const params = useParams();
  //   console.log("params", params);

  return (
    <div className="flex basis-full gap-12 mt-5">
      <div className="bg-bg-color-soft h-max p-2 rounded-md font-bold basis-1/5 text-text-color-soft ">
        <div className="relative w-full h-60  rounded-md overflow-hidden mb-5">
          <Image
            className="object-cover"
            fill
            alt="userIamge"
            src="/noproduct.jpg"
          />
        </div>
        text
      </div>

      <div className="bg-bg-color-soft p-5 rounded-md basis-4/5">
        <form className="flex flex-col gap-2  ">
          <label htmlFor="title">Title</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="text"
            name="title"
            placeholder="title"
          />

          <label htmlFor="price">Price</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="number"
            name="price"
            placeholder="price"
          />
          <label htmlFor="stock">Stock</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="number"
            name="stock"
            placeholder="stock"
          />

          <label htmlFor="color">Color</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="text"
            name="color"
            placeholder="Color"
          />
          <label htmlFor="size">Size</label>
          <input
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
            type="number"
            name="size"
            placeholder="Size"
          />
          <label htmlFor="category">Category</label>

          <select
            name="category"
            id="category"
            placeholder="Choose a Category"
            className=" w-full bg-bg-color p-3  border border-text-color-soft  rounded-md outline-none"
          >
            <option value="general">Choose a Category</option>
            <option value="electoronic">Electoronic</option>
            <option value="kitchen">kitchen</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="manitor">Manitor</option>
          </select>

          <label htmlFor="email">Description</label>
          <textarea
            placeholder="Description"
            name="desc"
            id="desc"
            rows="10"
            className="bg-bg-color p-3 border border-text-color-soft outline-none w-full rounded-md"
          />

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

export default SingleProductPage;
