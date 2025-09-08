"use client"
import "./style.css"
import Image from "next/image"

import { useState, useEffect, useRef } from "react"

const Slider = ({ slides = [] }) => {


    const couraselRef = useRef();
    let index = 0

    function changeImage() {

        index++;
        if (index > slides.length - 1) {
           
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1
          
        }

        const courasel = couraselRef.current;
        
        courasel.style.backgroundSize = 'cover'
        courasel.style.backgroundPosition = 'center'
        courasel.style.transition = 'all .5s ease-in-out'
        courasel.style.backgroundImage = `url('${slides[index].image}')`
    }

    useEffect(() => {

        setInterval(() => {


            changeImage();


        }, 5000);

    }, [])


    const displaySlides = slides.map((slide, index) => (<Image className="slide_img" width={500} height={500} key={index} src={slide.image} alt={slide.description} />))

    return <div ref={couraselRef} className="slide_wrapper">

        <div className="courasel">



        </div>
    </div>

}

export default Slider