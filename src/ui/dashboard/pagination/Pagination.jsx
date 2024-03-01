"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const hasPrevPage = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNextPage =
    ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const pageChaneHandler = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex items-center justify-between p-3">
      <button
        disabled={!hasPrevPage}
        className="py-2 px-3 w-24 text-center rounded-md text-text-color bg-text-color-soft  
         disabled:bg-slate-600 disabled:cursor-not-allowed"
        onClick={() => pageChaneHandler("prev")}
      >
        Previous
      </button>

      <button
        disabled={!hasNextPage}
        className="py-2 px-3 w-24 text-center rounded-md text-text-color bg-text-color-soft 
        disabled:bg-slate-600 disabled:cursor-not-allowed   "
        onClick={() => pageChaneHandler("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
