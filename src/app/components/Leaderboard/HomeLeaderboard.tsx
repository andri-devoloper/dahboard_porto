import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import GetLeaderboard from "./GetLeaderboard";
import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

interface LeaderboardData {
  id: string;
  url_img: string;
  judul: string;
  kode: string;
  deskripsi: string;
  Catogory: {
    id: string;
    category: string;
  };
}

interface CategoryData {
  id: string;
  category: string;
}

function HomeLeaderboard() {
  const [data, setData] = useState<LeaderboardData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState<LeaderboardData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [categories, setCategories] = useState<CategoryData[]>([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch("/api/category");
      const data = await response.json();
      console.log("Ini Data", data);
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/leaderboard");
      const data = await response.json();
      console.log("Ini Data", data);
      setData(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string, url_img: string) => {
    try {
      const imageName = decodeURIComponent(
        url_img.split("/").pop()?.split("?")[0] || ""
      );

      // Construct the correct file path
      const filePath = `leaderboard/${url_img}`;

      // Create a reference to the file to delete
      const storageRef = ref(storage, filePath);

      // Log the file path for debugging
      console.log("Path being used for deletion:", filePath);

      // Delete the file
      await deleteObject(storageRef);
      console.log("Image deleted successfully");

      const res = await fetch("/api/leaderboard", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setData(data.filter((item) => item.id !== id));
        setFilteredData(filteredData.filter((item) => item.id !== id));
        alert("Item deleted successfully");
      } else {
        console.error("Failed to delete item");
        alert("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = e.target.value;
    setSelectedCategory(selectedCategoryId);

    if (selectedCategoryId === "ALL") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) => item.Catogory.id === selectedCategoryId
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col mb-3">
          <label htmlFor="category" className="mb-2">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="px-2 py-1 border rounded-md border-gray-400 w-1/4"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="ALL">----ALL----</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <GetLeaderboard />
        {filteredData.map((item, index) => (
          <ImageCard
            key={index}
            data={item}
            onDelete={() => handleDelete(item.id, item.url_img)}
          />
        ))}
      </div>
    </>
  );
}

export default HomeLeaderboard;
