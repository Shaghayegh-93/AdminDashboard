"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/ui/dashboard/search/Search";
import Pagination from "@/ui/dashboard/pagination/Pagination";
import { useParams } from "next/navigation";

const ProductsPage = () => {
  const params = useParams();
  return (
    <div className="bg-bg-color-soft rounded-2xl p-5 mt-5">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search for a products" />
        <Link href="/dashboard/products/add">
          <button className="p-3 w-max rounded-md text-text-color border-none bg-btn">
            Add New
          </button>
        </Link>
      </div>
      <h2 className="mb-5 text-text-color-soft font-extralight">
        Latest Transactions
      </h2>
      <table className="w-full ">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3 ">
                <Image
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src="/noproduct.jpg"
                />
                john
              </div>
            </td>
            <td>
              <span className="">example@gail.com</span>
            </td>
            <td>14.02.2023</td>
            <td>client</td>
            <td>passive</td>
            <td>
              <div className="flex gap-3">
                <button className="rounded-md w-20 px-3 py-2 text-text-color border-none bg-teal-600">
                  View
                </button>
                <button className="rounded-md w-20 px-3 py-2 text-text-color border-none bg-red-700">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-3 ">
                <Image
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src="/noproduct.jpg"
                />
                john
              </div>
            </td>
            <td>
              <span className="">example@gail.com</span>
            </td>
            <td>14.02.2023</td>
            <td>client</td>
            <td>passive</td>
            <td>
              <div className="flex gap-3">
                <Link href={`/dashboard/products/${params.id}`}>
                  <button className="rounded-md w-20 px-3 py-2 text-text-color border-none bg-teal-600">
                    View
                  </button>
                </Link>
                <button className="rounded-md w-20 px-3 py-2 text-text-color border-none bg-red-700">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
