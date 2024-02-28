import React from "react";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-bg-color-soft p-5 rounded-xl">
      <h2 className="mb-5 text-text-color-soft font-extralight">
        Latest Transactions
      </h2>
      <table className="w-full ">
        <thead >
          <tr >
            <th >Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
          <tr >
            <td>
              <div className="flex items-center gap-3 ">
                <Image
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                john
              </div>
            </td>
            <td>
              <span
                className={`rounded-sm p-1 text-sm text-white bg-[#f7cb7375]`}
              >
                pending
              </span>
            </td>
            <td >14.02.2023</td>
            <td>$3.200</td>
          </tr>
          <tr >
            <td >
              <div className="flex items-center gap-3 ">
                <Image
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                john
              </div>
            </td>
            <td>
              <span>done</span>
            </td>
            <td className="">14.02.2023</td>
            <td>$3.200</td>
          </tr>
          <tr className="">
            <td className="">
              <div className="flex items-center gap-3 ">
                <Image
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                john
              </div>
            </td>
            <td>
              <span>cancelled</span>
            </td>
            <td className="">14.02.2023</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
