import React, { useState } from "react";

import UpcomingEvents from "./Events";
import CalendarComponent from "./Calender";
import Profile from "./Charts";
import EmployeeInfo from "./Informasi";
import OnboardingTable from "./Onboarding";

const ProfileCard = () => {
  return (
    <>
      <h1 className="mb-3 font-bold px-2 text-base md:text-3xl ">Profile</h1>
      <div className=" grid  md:grid-cols-4 gap-4  rounded-lg mb-6">
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg py-4 px-2">
          <Profile />
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <CalendarComponent />
        </div>
        <div>
          <UpcomingEvents />
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="col-span-2">
          <EmployeeInfo />
        </div>
        <div className="col-span-2">
          <OnboardingTable />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
// https://tse4.mm.bing.net/th?id=OIP.lVhja_V-PSfUxFWe9DCLqgAAAA&pid=Api&P=0&h=220
