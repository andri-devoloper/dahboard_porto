import React, { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from "react";

import InputGroup1 from "./components/InputGroup1";
import { useUser } from "@/app/dashboard/UserContext";

function InputModeCharts() {
  const { userId } = useUser();

  // console.log("Ini ID:", userId);

  const [formValues, setFormValues] = useState({
    userId: "",
    name: "",
    rules: "",
    position: "",
    phone: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingMessage("");
      setLoading(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const fetchData = async (id: string) => {
    try {
      const response = await fetch(`/api/profile/profiles?id=${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data && data.id && data.email) {
        const profile =
          data.Profile && data.Profile.length > 0 ? data.Profile[0] : {};
        setFormValues({
          userId: data.id,
          name: data.name || "",
          rules: data.rules || "",
          position: profile.position || "",
          phone: profile.phone || "",
          email: data.email || "",
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

  useEffect(() => {
    if (userId) {
      fetchData(userId);
    }
  }, [userId]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/profile/profil_data", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      const result = await response.json();
      if (result.status === "success") {
        // Handle success (e.g., show a success message or redirect)
        console.log("Update successful:", result.data);
      } else {
        // Handle error from the API
        setError(result.message || "An error occurred");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  console.log("Data Input:", formValues);

  if (loading) return <div>{loadingMessage}</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col bg-white w-full gap-8 rounded-md">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <InputGroup1
              name="name"
              label="Name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <InputGroup1
              name="rules"
              label="Roles *"
              value={formValues.rules}
              onChange={handleChange}
              type="text"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <InputGroup1
              name="position"
              label="Position"
              value={formValues.position}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <InputGroup1
              name="phone"
              label="Phone *"
              value={formValues.phone}
              onChange={handleChange}
              type="number"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <InputGroup1
              name="email"
              label="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <InputGroup1
              name="company"
              label="Company *"
              value={formValues.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="mt-4 px-4 py-1 rounded-lg bg-blue-500 text-white font-bold">
          Save
        </button>
      </div>
    </form>
  );
}

export { InputModeCharts };
