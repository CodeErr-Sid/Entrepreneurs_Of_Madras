import React, { useState } from 'react';
import { FaPlayCircle, FaTimes } from 'react-icons/fa'; // Importing the play and close icons
import { assets } from '../../assets/assets';

const Networking101 = ({ backgroundImage }) => {
  const [activeVideo, setActiveVideo] = useState(null); // State to track the currently playing video
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const videos = [
    {
      title: "Private Dinner With Million Dollar Brand Founder",
      series: "Founders Meet-Up Series 02",
      image: assets.network1,
      videoUrl: "https://www.youtube.com/embed/wtkoBjXsiBQ?si=At8YdyZOhchlI-lg",
      darkOverlay: true
    },
    {
      title: "Entrepreneurs Of Madras Club Edition 1",
      series: "Launched by 200Cr Brand Owner & 15+",
      image: assets.network2,
      videoUrl: "https://www.youtube.com/embed/X5zncoKqohk?si=KBycNn9JSjREEOGU",
      darkOverlay: false
    },
    {
      title: "Private Dinner With An Investor",
      series: "Founders Meet-Up Series 01",
      image: assets.network3,
      videoUrl: "https://www.youtube.com/embed/90B8SxhbuHA?si=tJ279hXdJBkwvvvW",
      darkOverlay: true
    }
  ];

  const handlePlayVideo = (index) => {
    setActiveVideo(index); // Set the active video when clicked
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setActiveVideo(null); // Reset the active video
  };

  return (
    <div
      className="flex flex-col items-center pt-16 pb-0 sm:py-20"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Applying background image
    >
      <h2 className="text-3xl font-bold text-center text-black">Networking 101</h2>
      <p className="text-center text-black mb-8">Meet quality people to conquer</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="w-full max-w-xs mx-auto relative group">
            <div className="relative group">
              {/* Thumbnail with overlay and play button */}
              <img src={video.image} alt={video.title} className="rounded-lg shadow-lg w-full" />
              {video.darkOverlay && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div> // Black overlay
              )}
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <FaPlayCircle
                  size={64}
                  className="text-white opacity-80 hover:opacity-100"
                  onClick={() => handlePlayVideo(index)} // Play the video on click
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-base text-black">{video.title}</h3>
              <p className="text-base text-black">{video.series}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for video */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white rounded-lg overflow-hidden w-[90%] h-[50%] md:w-3/5 md:h-4/5 relative">
            <iframe
              className="w-full h-full"
              src={videos[activeVideo].videoUrl}
              title={videos[activeVideo].title}
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Networking101;