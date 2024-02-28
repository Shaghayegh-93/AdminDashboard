"use client";
import React from "react";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebadr = () => {
  const menuItem = [
    {
      title: "Pages",
      list: [
        { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Setting",
          path: "/dashboard/setting",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/reports",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  const pathName = usePathname();
  return (
    <div className="sticky top-10 min-h-screen">
      <div className="flex items-center gap-5 mb-4">
        <div className="rounded-full  relative size-16">
          <Image
            fill
            className=" rounded-full"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="flex flex-col ">
          <span className="font-medium">User1</span>
          <span className="text-text-color-soft text-xs">admin</span>
        </div>
      </div>
      <div className="h-screen">
        {menuItem.map((item) => (
          <div key={item.title}>
            <p className="my-2 font-bold text-text-color-soft text-sm">
              {item.title}
            </p>
            <ul>
              {item.list.map((listItem) => (
                <Link
                  className={`flex items-center p-4 gap-2  rounded-md ${
                    pathName === listItem.path && "bg-[#2e374a]"
                  } hover:bg-[#2e374a]`}
                  href={listItem.path}
                  key={listItem.path}
                >
                  <p>{listItem.icon}</p>
                  <p>{listItem.title}</p>
                </Link>
              ))}
            </ul>
          </div>
        ))}
        <button className="flex items-center p-4 gap-2 hover:bg-[#2e374a]">
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebadr;
