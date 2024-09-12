import React from 'react';
import Button from '../../Button';

export default function Banner() {
    return (
        <div
            className='relative w-full h-[900px] bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/images/main-banner.png')" }}
        >
            {/* Text content */}
            <div className='absolute inset-0 flex flex-col justify-center items-start text-left text-white p-8 md:p-16 lg:p-24 mb-48'>
                <p className='mt-1'>SUMMER 2020</p>
                <h1 className='text-3xl md:text-5xl font-bold mb-4'>NEW <br />COLLECTION</h1>
                <p className='text-sm md:text-lg mb-6'>
                    We know how large objects will act, but things on a small scale.
                </p>
                <Button>
                    Shop Now
                </Button>
                <h2 className=' mb-4  text-3xl md:text-5xl font-bold mt-10 mb-2'>Get up to 30% off</h2>
                <h1 className='text-2xl md:text-4xl font-semibold mt-2 text-[#4A4A4A]'>New Arrivals</h1>
                <p className='mt-1'>Introducing our latest collection of products</p>
            </div>
        </div>
    );
}
