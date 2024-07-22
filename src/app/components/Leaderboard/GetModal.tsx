import React, { useEffect, useState } from "react";

interface GetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const GetModal: React.FC<GetModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 500); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`absolute inset-0 bg-black opacity-50 transition-opacity duration-500 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`bg-white p-4 rounded shadow-lg z-10 transition-transform duration-500 ${
          isOpen ? "animate-fadeIn" : "animate-fadeOut"
        } max-w-2xl w-full mx-4`} // Adjust width and max-width here
      >
        {children}
      </div>
    </div>
  );
};

export default GetModal;
