import React from 'react';
import Carousel from '@/components/Caraousal';

const Home = () => {
  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="introduction text-center py-8 mt-16"> {/* Added mt-16 for top margin */}
        <h1 className="text-4xl font-bold mt-4">Springdale Public School</h1>
        <p className="mt-2 text-lg">
          Welcome to Springdale Public School, where we nurture young minds to achieve excellence in academics and beyond.
        </p>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section my-8">
        <Carousel />
      </section>

      {/* Quick Links Section */}
      <section className="quick-links text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-blue-500 hover:underline">About Us</a>
          <a href="/admissions" className="text-blue-500 hover:underline">Admissions</a>
          <a href="/academics" className="text-blue-500 hover:underline">Academics</a>
          <a href="/contact" className="text-blue-500 hover:underline">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Home;