import React from 'react';

const ImageCard = ({ image, shop, views, comments }) => (
  <div className="rounded-xl overflow-hidden shadow-md bg-white">
    <img src={image} alt="Sale" className="w-full h-48 object-cover" />
    <div className="p-2">
      <h3 className="font-semibold text-lg">{shop}</h3>
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>👁️ {views}</span>
        <span>💬 {comments}</span>
      </div>
    </div>
  </div>
);

export default ImageCard;
