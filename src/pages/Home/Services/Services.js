import React from 'react';
import './Services.css';
import webDesign from '../../../Images/web-design.png';
import webDevelopment from '../../../Images/web-development.png';

const Services = () => {
    return (
        <div className=' py-28 px-5 md:pl-20'>
            <h2 className=' text-transparent text-xl  mb-3 font-semibold mb-20 text-outline'>Services</h2>
            <h1 className='text-4xl font-bold text-white mb-4'>What I can offer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  mt-10 gap-10'>
                <div className='shadow-lg bg-indigo-900 rounded-2xl p-7 text-white hover:bg-transparent duration-700'>
                    <img className='mx-auto' src={webDesign} alt='' />
                    <h1 className='text-2xl font-semibold text-green-500 mb-5'>Web design</h1>
                    <h3>Design Website using HTML, CSS, Bootstrap or Tailwind css</h3>
                </div>
                <div className='shadow-lg bg-indigo-900 rounded-2xl p-7 text-white hover:bg-transparent duration-700'>
                    <img className='mx-auto hover:' src={webDevelopment} alt='' />
                    <h1 className='text-2xl font-semibold text-green-500 mb-5'>Web Development</h1>

                    <h3>Develop Website using HTML, CSS, Bootstrap or Tailwind css, Javascript, React js, Node js, MongoDB</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;