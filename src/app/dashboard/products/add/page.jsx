"use cleint";
import React from "react";
import Image from "next/image";

const AddProductPage = () => {
  return (
    <div className=" text-text-color mt-6 rounded-md ">
      <div className="flex bg-bg-color-soft rounded-md">
        <form className="p-5  flex justify-around gap-4 flex-wrap">
          <input
            className="bg-transparent w-[45%] bg-bg-color p-3 rounded-md border border-text-color-soft "
            type="text"
            placeholder="Title"
            name="title"
            required
          />
          <select
            name="category"
            id="category"
            placeholder="Choose a Category"
            className=" bg-transparent w-[45%] bg-bg-color p-3 rounded-md border border-text-color-soft "
          >
            <option value="general">Choose a Category</option>
            <option value="electoronic">Electoronic</option>
            <option value="kitchen">kitchen</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="manitor">Manitor</option>
          </select>
         
          <input
            className="bg-transparent bg-bg-color p-3 rounded-md border border-text-color-soft  w-[45%]"
            type="number"
            placeholder="Price"
            name="price"
          />
          <input
            className="bg-transparent bg-bg-color p-3 rounded-md border border-text-color-soft  w-[45%] "
            type="number"
            placeholder="Stock"
            name="stock"
          />
        
          <input
            className="bg-transparent bg-bg-color p-3 rounded-md border border-text-color-soft w-[45%]"
            type="text"
            placeholder="Color"
            name="colcor"
          />
          <input
            className="bg-transparent bg-bg-color p-3 rounded-md border border-text-color-soft w-[45%]"
            type="text"
            placeholder="Size"
            name="size"
          />

          <textarea
            placeholder="Description"
            name="desc"
            id="desc"
            rows="10"
            className="p-5 rounded-md bg-bg-color border border-text-color-sof w-full mx-7"
          />
          <button
            type="submit"
            className="bg-teal-600 p-4 rounded-md w-full mx-7 font-bold text-xl"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
