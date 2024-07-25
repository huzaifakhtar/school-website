import React, { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', alt: '' });

  const photos = [
    { src: 'sports_day.jpg', alt: 'Students participating in various sports events.', type: 'event', date: '2023-01-15' },
    { src: 'science_exhibition.jpg', alt: 'Students presenting their science projects.', type: 'event', date: '2023-02-20' },
    { src: 'cultural_fest.jpg', alt: 'Students performing in the cultural fest.', type: 'event', date: '2023-03-10' },
    { src: 'classroom.jpg', alt: 'A glimpse of our interactive classrooms.', type: 'infrastructure', date: '2023-04-05' },
    { src: 'library.jpg', alt: 'Students reading and studying in the school library.', type: 'infrastructure', date: '2023-05-12' },
  ];

  const videos = [
    { src: 'school_tour.mp4', alt: 'Virtual tour of Springdale Public School.', type: 'infrastructure', date: '2023-06-01' },
    { src: 'annual_function.mp4', alt: 'Highlights from the Annual Function 2023.', type: 'event', date: '2023-07-20' },
  ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleLightboxOpen = (src, alt) => {
    setLightbox({ isOpen: true, src, alt });
  };

  const handleLightboxClose = () => {
    setLightbox({ isOpen: false, src: '', alt: '' });
  };

  const filteredPhotos = photos.filter(photo => filter === 'all' || photo.type === filter);
  const filteredVideos = videos.filter(video => filter === 'all' || video.type === filter);

  return (
    <div className="gallery p-8 mt-14 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Gallery</h1>
      <div className="mb-4 text-center">
        <label htmlFor="filter" className="mr-2">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange} className="text-white p-2 border rounded">
          <option value="all">All</option>
          <option value="event">Event</option>
          <option value="infrastructure">Infrastructure</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={photo.src} alt={photo.alt} className="w-full h-auto mb-4 cursor-pointer" onClick={() => handleLightboxOpen(photo.src, photo.alt)} />
            <p className="text-lg text-gray-700">{photo.alt}</p>
          </div>
        ))}
        {filteredVideos.map((video, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <video controls className="w-full h-auto mb-4">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-lg text-gray-700">{video.alt}</p>
          </div>
        ))}
      </div>
      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleLightboxClose}>
          <div className="relative">
            <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-full" />
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={handleLightboxClose}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;