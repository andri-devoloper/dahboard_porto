import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import LayoutSettings from "@/app/components/setting/Settings";
import React from "react";

function Settings() {
  return (
    <DefaultLayout>
      <div className="bg-[#EDF4FF] w-full  px-5 py-3">
        <LayoutSettings />
      </div>
    </DefaultLayout>
  );
}

export default Settings;
