"use client";

import { useEffect } from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { useSession, getSession } from "next-auth/react";
import ImageCard from "@/app/components/Leaderboard/ImageCard";
import HomeLeaderboard from "@/app/components/Leaderboard/HomeLeaderboard";

const Leaderboard = () => {
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
        <HomeLeaderboard />
      </div>
    </DefaultLayout>
  );
};

export default Leaderboard;
