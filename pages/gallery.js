import React from 'react';

const Gallery = () => {
  const photos = [
    { src: 'sports_day.jpg', alt: 'Students participating in various sports events.' },
    { src: 'science_exhibition.jpg', alt: 'Students presenting their science projects.' },
    { src: 'cultural_fest.jpg', alt: 'Students performing in the cultural fest.' },
    { src: 'classroom.jpg', alt: 'A glimpse of our interactive classrooms.' },
    { src: 'library.jpg', alt: 'Students reading and studying in the school library.' },
  ];

  const videos = [
    { src: 'school_tour.mp4', alt: 'Virtual tour of Springdale Public School.' },
    { src: 'annual_function.mp4', alt: 'Highlights from the Annual Function 2023.' },
  ];

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <ul>
        {photos.map((photo, index) => (
          <li key={index}>
            <img src={photo.src} alt={photo.alt} />
          </li>
        ))}
      </ul>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <video src={video.src} alt={video.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;