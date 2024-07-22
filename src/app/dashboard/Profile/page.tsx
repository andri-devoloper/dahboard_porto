"use client";

import { useEffect } from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { useSession, getSession } from "next-auth/react";
import ProfileCard from "@/app/components/Profile/Name";
import CalendarComponent from "@/app/components/Profile/Calender";
import LayoutSettings from "@/app/components/setting/Settings";

const Profile = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      if (!session) {
        return null;
      }
    };

    fetchData();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }
  return (
    <DefaultLayout>
      <div className="bg-[#EDF4FF] w-full  px-5 py-3">
        <LayoutSettings />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
