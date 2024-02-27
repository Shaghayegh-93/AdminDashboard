import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <button
        disabled
        className={`py-2 px-3 w-24 text-center rounded-md text-text-color bg-text-color-soft disabled:cursor-not-allowed disabled:bg-slate-600`}
      >
        Previous
      </button>

      <button className="py-2 px-3 w-24 text-center rounded-md text-text-color bg-text-color-soft">
        Next
      </button>
    </div>
  );
};

export default Pagination;
