import React from 'react';

const NewsCard = ({ title, description, date }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <h3 className="font-poppins font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="font-poppins text-gray-300 mb-4">{description}</p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  );
};

export default NewsCard;
