import React, { useEffect, useState } from "react";

interface AnimationComponentProps {
  onFinishAnimation: () => void;
}

const AnimationComponent: React.FC<AnimationComponentProps> = ({
  onFinishAnimation,
}) => {
  useEffect(() => {
    // Contoh pengaturan timeout untuk simulasi animasi
    const timeout = setTimeout(() => {
      onFinishAnimation(); // Panggil callback ketika animasi selesai
    }, 2000); // Misalnya, animasi berlangsung selama 2 detik

    return () => clearTimeout(timeout);
  }, [onFinishAnimation]);

  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-5 bg-slate-700 rounded" />
      </div>
    </div>
  );
};

export default AnimationComponent;
