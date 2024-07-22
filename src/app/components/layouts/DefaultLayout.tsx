"use client";
import React, { useState, ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import Incoment from "../../Incamen/page";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section>
      <div>
        <div className="sticky top-0 z-50">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} id={""} />
        </div>
        <div className="w-full h-screen">
          <div className="grid grid-cols-12">
            <div className=" text-white col-span-0 md:col-span-2">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
            <div className="md:col-span-10 col-span-12">
              <div className="p-3 bg-[#62A8DC]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
