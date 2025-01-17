"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname(); //* use for toggel when side bar open it will close immediately when we change the route in sidebar
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    toggleSidebar();
  }, [pathname]);

  //* add event listener to close sidebar when click outside of sidebar

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setisOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="relative flex">
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div
        ref={sidebarRef}
        className={`fixed md:hidden ease-in-out transition-all duration-400 ${
          isOpen ? "translate-x-0" : "-translate-x-[260px]"
        }`}
      >
        <Sidebar />
      </div>
      <section className="flex-1 flex flex-col  min-h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <section className="flex-1 bg-[#eff3f4]">{children}</section>
      </section>
    </main>
  );
}
