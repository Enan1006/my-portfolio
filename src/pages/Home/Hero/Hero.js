import React from 'react';
import './Hero.css';
// import resume from './enan-resume.pdf';
import { Link } from 'react-router-dom';
import devImg from '../../../Images/web-dev-1.png';
const Hero = () => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  py-28'>
                <div className='text-left px-5 md:pl-20'>
                    <h1 className='text-7xl text-white font-bold'>Hi <br /> I'm <span className='text-green-500'>IH Enan</span></h1>
                    <h3 className='text-white text-3xl font-semibold mt-6'>Full-stack developer specializing in MERN stack development</h3>
                    <button className='bg-indigo-900 text-green-400 px-6 py-3 font-semibold mt-8 rounded-lg hover:translate-y-2 hover:bg-transparent hover:shadow-md hover:shadow-slate-800 duration-500 ' >
                        <a download="" href="https://ih-enan.netlify.app/enan-resume.pdf">Download Resume</a>
                    </button>
                </div>
                <div>
                    <img className='w-96 mx-auto md:w-auto' src={devImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;