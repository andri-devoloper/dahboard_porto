import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "./GetModal"; // Adjust the import path as needed
import GetInputModal from "./GetInputModal";

function GetLeaderboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <div
        className="bg-red-200 p-2 w-full h-[41vh] flex justify-center items-center hover:bg-gray-100 hover:border cursor-pointer"
        onClick={handleOpenModal}
      >
        <FaPlus className="text-5xl text-white" />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl mb-3 font-bold">New Leaderboard</h2>
        <GetInputModal onClose={handleCloseModal} onDataAdded={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </Modal>
    </div>
  );
}

export default GetLeaderboard;
