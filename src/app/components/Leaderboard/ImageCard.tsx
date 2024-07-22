import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";

interface LeaderboardData {
  Catogory: any;
  url_img: string;
  judul: string;
  kode: string;
  deskripsi: string;
}

interface ImageCardProps {
  data: LeaderboardData;
  onDelete: () => void; // Add onDelete prop
}

const ImageCard: React.FC<ImageCardProps> = ({ data, onDelete }) => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraphVisible = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex h-[41vh] flex-col justify-between">
      <div>
        <Image
          width={400}
          height={400}
          className="w-full"
          src={data.url_img || "/images/01.jpg"}
          alt="foto"
        />
        <div className="">
          <div
            className="text-sm mb-2 text-center bg-gray-500 py-1 px-4 text-white cursor-pointer flex justify-between"
            onClick={toggleParagraphVisible}
          >
            {data.judul} <span> {data.kode}</span>
          </div>
          <p>Category: {data.Catogory.category}</p>
          {isParagraphVisible && (
            <p className="text-gray-700 text-base px-4">{data.deskripsi}</p>
          )}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-around bg-pink-600">
        <Link href="#" className="text-gray-100" onClick={onDelete}>
          <MdDelete />
        </Link>
        <Link href="#" className="text-gray-100">
          <MdEditSquare />
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
