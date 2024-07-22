"use client";

import { storage } from "@/lib/firabaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      console.log(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setUploadedUrl(url);
      console.log("File Uploaded Succesfuly");
    } catch (error) {
      console.error("Error uploading the file", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      <p>Url: {uploadedUrl}</p>
      {uploadedUrl && (
        <div>
          <p>Uploaded image:</p>
          <Image
            src={uploadedUrl}
            alt="Uploaded image"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      )}
    </div>
  );
}

export default Upload;
