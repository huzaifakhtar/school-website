import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/academics">Academics</Link>
        </li>
        <li>
          <Link href="/admissions">Admissions</Link>
        </li>
        <li>
          <Link href="/faculty">Faculty</Link>
        </li>
        <li>
          <Link href="/students">Students </Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
