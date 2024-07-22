"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputGroup from "./components/ImputGrub";

import { storage } from "@/lib/firabaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface GetInputModalProps {
  onClose: () => void;
  onDataAdded: () => void;
}

interface Category {
  id: string; // Adjust according to your actual data structure
  category: string; // Adjust according to your actual data structure
}

const GetInputModal: React.FC<GetInputModalProps> = ({
  onClose,
  onDataAdded,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [kode, setKode] = useState<string>("");
  const [judul, setJudul] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/category");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();

        setCategories(result);

        console.log("API Category:", result);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    };
    fetchData();
  }, []);

  console.log("Ini category dua:", categories);

  const generateRandomCode = () => {
    const prefix = "ANDEV";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = prefix;
    const length = 8;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const generateFileName = () => {
    const prefix = "ANDEV";
    const now = new Date();
    const detik = now.getSeconds().toString().padStart(2, "0");
    const menit = now.getMinutes().toString().padStart(2, "0");
    const jam = now.getHours().toString().padStart(2, "0");
    const tgl = now.getDate().toString().padStart(2, "0");
    const bulan = (now.getMonth() + 1).toString().padStart(2, "0");
    const tahun = now.getFullYear();

    return `${prefix}-${detik}${menit}${jam}${tgl}${bulan}${tahun}`;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];

      // Create a new file with the same content but a different name
      const newFileName = generateFileName();
      const newFile = new File([selectedFile], newFileName, {
        type: selectedFile.type,
      });

      setFile(newFile);
      setImagePreview(URL.createObjectURL(newFile)); // Show preview
      console.log(newFile);
    }
  };

  useEffect(() => {
    const randomCode = generateRandomCode();
    setKode(randomCode);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file || !judul || !description) {
      console.error("All fields are required");
      return;
    }

    setUploading(true);

    console.log("Name:", file.name);
    const storageRef = ref(storage, `leaderboard/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setUploadedUrl(url);
      console.log("Uploaded Image URL:", url);

      const requestData = {
        kode: kode,
        judul: judul,
        deskripsi: description,
        url_img: url,
        catogoryId: selectedCategory,
      };

      // console.log("Request Payload:", requestData);

      try {
        const res = await fetch("/api/leaderboard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        // console.log("Server Response:", res);

        if (!res.ok) {
          const errorResponse = await res.text();
          throw new Error(
            `Failed to save data to leaderboard: ${errorResponse}`
          );
        }

        const result = await res.json();
        console.log("Data saved:", result);
        onClose();
        onDataAdded();
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    } catch (error) {
      console.error("Error uploading the file", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full mb-5">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50"
        >
          {imagePreview ? (
            <div className="relative w-64 h-44 mb-3">
              <Image
                src={imagePreview}
                layout="fill"
                objectFit="cover"
                alt="Preview"
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="mb-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
              >
                <g id="Upload 02">
                  <path
                    id="icon"
                    d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          )}
          <h2 className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">
            PNG, JPG or PDF, smaller than 15MB
          </h2>
          <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
            Drag and Drop your file here or
          </h4>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            name="file_image"
            required
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-3">
        <InputGroup
          label="Judul"
          name="judul_image"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />
        <InputGroup
          label="Kode"
          name="kode_image"
          value={kode}
          readOnly
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="" className="mb-2">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          required
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-2 py-1 border rounded-md border-gray-400"
        >
          <option>----Pilih----</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.category}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mb-3">
        <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
          Description
        </label>
        <textarea
          className="block w-full h-40 px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none resize-none leading-relaxed"
          placeholder="Enter a description..."
          name="description_image"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <button
          type="submit"
          className="bg-blue-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
          disabled={uploading} // Disable button during upload
        >
          {uploading ? "Uploading..." : "Save"}
        </button>
        <button
          type="button"
          className="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default GetInputModal;
