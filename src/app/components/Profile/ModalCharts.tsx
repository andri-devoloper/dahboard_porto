import React, { useEffect, useId, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useUser } from "@/app/dashboard/UserContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const { userId } = useUser();

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timeout = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center w-full justify-center top-0 z-50 bg-black bg-opacity-50 ${
        isOpen ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-4 w-full max-w-md transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between mb-10">
          <h1 className="font-bold">Edit Profile, {userId}</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl md:text-3xl"
          >
            <IoClose />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
