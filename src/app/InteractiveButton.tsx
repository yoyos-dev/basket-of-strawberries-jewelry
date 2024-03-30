'use client';
import React from 'react';

interface InteractiveButtonProps {
  url: string;
  imgSrc: string;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ url, imgSrc }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <button role="link" onClick={() => openInNewTab(url)} className="rounded-full h-12 w-12">
        <img src={imgSrc} alt="" className="fill-red-700"/>
    </button>
  );
};

export default InteractiveButton;