"use client";

import {
  LayoutDashboard,
  ShoppingBasket,
  Layers,
  PackageOpen,
  ShoppingCart,
  UserRound,
  Star,
  LibraryBig,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const menuList = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <ShoppingBasket className="h-5 w-5" />,
    },
    {
      name: "Categories",
      link: "/admin/categoreis",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <PackageOpen className="h-5 w-5" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <UserRound className="h-5 w-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-5 w-5" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-5 w-5" />,
    },
  ];

  return (
    <section className="flex flex-col gap-10 bg-white border-r px-5 py-3 h-screen overflow-hidden md:w-[300px]">
      <div className="flex justify-center items-center w-full">
        <img className="h-9 w-auto object-contain" src="/logo.png" alt="Logo" />
      </div>
      <ul className="flex-1 flex flex-col gap-4">
        {menuList?.map((item, key) => {
          return <Tab item={item} key={key} />;
        })}
      </ul>
    </section>
  );
}

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;
  return (
    <Link href={item?.link}>
      <li
        className={`flex items-center gap-3 px-4 py-2 rounded-xl  font-semibold ease-soft-spring transition-all duration-300 ${
          isSelected ? "bg-red-400 text-white" : "bg-white text-black"
        }`}
      >
        {item?.icon}
        {item?.name}
      </li>
    </Link>
  );
}
