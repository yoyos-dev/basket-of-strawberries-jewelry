'use client';
import React, { useState, useEffect } from 'react';
import { images } from '../imageData.js';
import { tailwindColors } from './tailwindColors';

export default function JewelryBox() {
  const [numColumns, setNumColumns] = useState(3);
  const [columnImages, setColumnImages] = useState<string[][]>([]);

  const getRandomBgColor = () => {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[randomIndex];
  };
  
  useEffect(() => {
    const distributeImages = () => {
      const newColumnImages: string[][] = Array.from({ length: numColumns }, () => []);
      
      images.forEach((image, index) => {
        newColumnImages[index % numColumns].push(image);
      });

      setColumnImages(newColumnImages);
    };

    distributeImages();
  }, [numColumns]);

  useEffect(() => {
    const handleResize = () => {
      // Adjust numColumns based on window width or other logic
      if (window.innerWidth < 768) {
        setNumColumns(1);
      } else if (window.innerWidth < 1280) {
        setNumColumns(2);
      } else {
        setNumColumns(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-full w-full flex flex-row gap-4 p-4 sm:overflow-auto">
      {columnImages.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4 h-fit w-full mb-72">
          {column.map((src, imageIndex) => {
            return (
              <img key={imageIndex} src={src} className={`${getRandomBgColor()} w-full h-auto max-h-72 object-scale-down p-3`} alt="" />
            );
          })}
        </div>
      ))}
    </div>
  );
}