import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Springdale Public School" />
            </a>
          </Link>
        </div>
        <div className="header-text">
          <h1>Springdale Public School</h1>
          <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;