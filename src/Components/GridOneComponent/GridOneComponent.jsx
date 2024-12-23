import { Clock } from "lucide-react";
import React from "react";

// Individual Blog Card Component
const GridOneComponent = ({ image, category, title, excerpt, timeAgo, outsideDescription }) => {

  return (
    <div className="bg-white  shadow-md hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform transform hover:scale-95 duration-500"
        />
      </div>
      <div className="p-4">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 border-2 border-black">
            {category}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{excerpt}</p>
        <p>
          {outsideDescription}....
        </p>
        <div className="flex items-center justify-between mt-14">
          <span className="text-sm text-gray-500 flex flex-row gap-2 items-center">
            <Clock size={16} />
            {
              new Date(timeAgo).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short", // "short" for abbreviated month (e.g., "Sept")
                year: "numeric",
              })}</span>
        </div>
      </div>
    </div>
  );
};

export default GridOneComponent;
