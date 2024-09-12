"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../../Button';

export default function Page2d() {
    const calculateTimeLeft = () => {
        const offerEndDate = new Date('2024-09-10T19:59:59+05:30'); // Offer end date in IST
        const now = new Date();
        const difference = offerEndDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Multiple slider images
    const sliderImages = [
        '/assets/images/splider1.png',
        '/assets/images/splider2.png',
        '/assets/images/splider3.png',
    ];

    const handleSlideChange = (direction) => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
        }
    };

    const nextSlide = (currentSlide + 1) % sliderImages.length;

    return (
        <div className="flex flex-col md:flex-row text-left p-8 md:p-16 lg:p-24 space-x-6">
            {/* Left side content */}
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl mb-4 justify-center items-start">
                    <span className="text-blue-500">Deals</span> Of The Month
                </h1>
                <p className="my-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Scelerisque duis ultrices sollicitudin aliquam sem. <br /> Scelerisque duis ultrices sollicitudin
                </p>

                <Button className="flex items-center text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                    <Image src="/assets/images/cart.png" alt="Cart" width={20} height={20} className="mr-2" />
                    Buy Now
                </Button>

                <h2 className="text-3xl md:text-2xl font-semibold mt-10">
                    Hurry, Before It's Too Late!
                </h2>

                {/* Countdown Timer */}
                <div className="flex space-x-4 mt-4 flex-wrap">
                    {timeLeft.days !== undefined ? (
                        <>
                            <div className="bg-white text-[#484848] text-center rounded-lg p-4 w-16 md:w-20 shadow-xl">
                                <p className="text-sm md:text-lg font-bold">{timeLeft.days}</p>
                                <p className="text-xs md:text-sm">Days</p>
                            </div>
                            <div className="bg-white text-[#484848] text-center rounded-lg p-4 w-16 md:w-20 shadow-xl">
                                <p className="text-sm md:text-lg font-bold">{timeLeft.hours}</p>
                                <p className="text-xs md:text-sm">Hours</p>
                            </div>
                            <div className="bg-white text-[#484848] text-center rounded-lg p-4 w-16 md:w-20 shadow-xl">
                                <p className="text-sm md:text-lg font-bold">{timeLeft.minutes}</p>
                                <p className="text-xs md:text-sm">Minutes</p>
                            </div>
                            <div className="bg-white text-[#484848] text-center rounded-lg p-4 w-16 md:w-20 shadow-xl">
                                <p className="text-sm md:text-lg font-bold">{timeLeft.seconds}</p>
                                <p className="text-xs md:text-sm">Seconds</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-xl font-semibold text-red-500">Offer has ended!</p>
                    )}
                </div>
            </div>

            {/* Right side slider content */}
            <div className="md:w-1/2 flex flex-col items-center">
                <div className="relative w-full h-96 flex space-x-6 transition-transform duration-500 ease-in-out">
                    {/* Current Slide */}
                    <div className="relative w-3/5 h-full">
                        <Image
                            src={sliderImages[currentSlide]}
                            alt={`Slide ${currentSlide + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Next Slide (Smaller) */}
                    <div className="relative w-2/5 h-full scale-75">
                        <Image
                            src={sliderImages[nextSlide]}
                            alt={`Slide ${nextSlide + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Slider controls */}
                <div className="flex justify-center mt-4 space-x-4">
                    <button
                        onClick={() => handleSlideChange('prev')}
                        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={() => handleSlideChange('next')}
                        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
                    >
                        &gt;
                    </button>
                </div>
                
            </div>
        </div>
    );
}
