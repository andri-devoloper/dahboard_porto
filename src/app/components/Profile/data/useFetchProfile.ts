import { useState, useEffect } from "react";
import { useUser } from "@/app/dashboard/UserContext";

interface Profile {
  id: string;
  name: string;
  rules: string;
  position: string;
  phone: string;
  email: string;
  company: string;
}

interface FetchProfileResult {
  data?: Profile;
  error?: string;
  loading: boolean;
}

const useFetchProfile = (id: string): FetchProfileResult => {
  const [data, setData] = useState<Profile | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const { userId } = useUser();

  // console.log("Ini ID:", userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profile/profiles?id=${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        console.log("API Response:", result);

        if (result && result.id && result.email) {
          // Assuming the API returns the profile data directly
          const profile =
            result.Profile && result.Profile.length > 0
              ? result.Profile[0]
              : {};

          setData({
            id: result.id,
            name: result.name || "",
            rules: result.rules || "",
            position: profile.position || "",
            phone: profile.phone || "",
            email: result.email || "",
            company: profile.company || "",
          });
        } else {
          setError("User not found");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return { data, error, loading };
};

export default useFetchProfile;
