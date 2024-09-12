"use client";
import Image from "next/image";
import './style.css';

const images = [
'/assets/images/slider1.png',
  '/assets/images/slider2.png',
  '/assets/images/slider3.png',
  '/assets/images/slider4.png',
  '/assets/images/slider5.png',
  '/assets/images/slider2.png'
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.concat(images).map((src, index) => (
          <div key={index} className="slide">
            <Image
              src={src}
              width={600}
              height={400}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

