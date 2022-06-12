import React from 'react';
import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Portfolio = () => {
    return (
        <div>
            <div className=' py-28 px-5 md:pl-20'>
                <h2 className=' text-transparent text-xl  mb-3 font-semibold mb-20 text-outline opacity-20'>Portfolio</h2>
                <h1 className='text-4xl font-bold text-white mb-4'>What I have done</h1>
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        ...
                    </div>
                    <div class="swiper-pagination"></div>

                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;