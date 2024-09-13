'use client'
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';

export default function Index() {
    let sliderRef = useRef(null);
    
    const next = () => {
        sliderRef.slickNext();
    };
    
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

    useEffect(() => {
        const handleWheel = (event) => {
            const deltaY = event.deltaY;

            if (deltaY > 0) {
                next(); // Scroll down
            } else if (deltaY < 0) {
                previous(); // Scroll up
            }
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className="w-[100vw] h-[100vh] overflow-hidden">
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <div className='videoDiv'>
                    <video className="w-full h-full object-cover p-0 m-0" muted loop autoPlay src="/Apple-2.mp4" />
                </div>
                <div className='videoDiv'>
                    <video className="w-full h-full object-cover p-0 m-0" muted loop autoPlay src="/Click-Click_Cutdown_3-2.mp4" />
                </div>
                <div className='videoDiv'>
                    <video className="w-full h-full object-cover p-0 m-0" muted loop autoPlay src="/Foret-2.mp4" />
                </div>
                <div className='videoDiv'>
                    <video className="w-full h-full object-cover p-0 m-0" muted loop autoPlay src="/Hermes-2.mp4" />
                </div>
                <div className='videoDiv'>
                    <video className="w-full h-full object-cover p-0 m-0" muted loop autoPlay src="/Unna-2.mp4" />
                </div>
            </Slider>
        </div>
    );
}
