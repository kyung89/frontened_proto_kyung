// HeroSection.jsx 파일

import React from 'react';
import HeroButtons from './HeroButtons';

export default function HeroSection() {
    return (
        <div className="hero-container bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center relative">
            <video src="/video/farm.mp4" autoPlay loop muted className="object-cover w-full h-full absolute inset-0 z-0" />
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold z-10 mb-3">
                FarmHani
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-dela z-10">
                What are you waiting for?
            </p>
            <div className="mt-8  z-10">
                <HeroButtons />
            </div>
        </div>
    );
}
