import React from 'react';
import {ClientsContainer, ClientsH3, ClientsLogo, Img} from './ClientsElemets'
import nature from '../../images/nature.svg';
import Slider from "react-slick";
const Clients = () => {

    const setting = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '0px',
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        cssEase: "linear",
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    }
    return (
        <ClientsContainer>
            <ClientsH3>
                Nuestros Clientes
            </ClientsH3>  
                <Slider {...setting}>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                    <ClientsLogo>
                        <Img src={nature} />
                    </ClientsLogo>
                </Slider>
            </ClientsContainer>
    )
}

export default Clients
