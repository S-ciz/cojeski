"use client"
import "./style.css"
import { useState, useEffect, useRef } from "react"

const Slider = ({ slides = [] }) => {
    const couraselRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    function changeImage(nextIndex) {
        let newIndex = typeof nextIndex === 'number' ? nextIndex : currentIndex + 1;
        if (newIndex > slides.length - 1) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        const courasel = couraselRef.current;
        if (courasel && slides.length > 0) {
            courasel.style.backgroundSize = 'cover';
            courasel.style.backgroundPosition = 'center';
            courasel.style.transition = 'background-image 0.7s ease-in-out';
            courasel.style.backgroundImage = `url('${slides[currentIndex].image}')`;
        }
    }, [currentIndex, slides]);

    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            changeImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, slides]);

    return (
        <div className="slide_wrapper">
            <div ref={couraselRef} className="courasel" />
            <div className="slider-controls">
                <button onClick={() => changeImage(currentIndex - 1)}>Prev</button>
                <button onClick={() => changeImage(currentIndex + 1)}>Next</button>
            </div>
        </div>
    );
}

export default Slider