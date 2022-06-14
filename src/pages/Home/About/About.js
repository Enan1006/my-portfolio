import React from 'react';
import CountUp from 'react-countup';
import aboutImg from '../../../Images/coding.png';


const About = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2  py-24 mx-5 md:pl-10 gap-7'>
                <div>
                    <h3 className='text-green-500 text-xl text-left mb-3 font-semibold stroke-white stroke-2'>||  About me</h3>
                    <h2 className='text-4xl font-bold text-white text-left mb-4'>Imdadul Haque Enan</h2>
                    <p className='text-left text-white'>I’m Imdadul Haque Enan, presently pursuing a BSc in Electronics and Information Engineering. Lately I have find my interest on programming. So, I decided to explore programming and learning core concepts.  I’m extremely enthusiastic about programming, collecting knowledge and using it in a broad way. I am a positive, exuberant and competent guy. Who, over the months, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. I take my work as a Web Developer earnestly, and this betokens I always ascertain my skills are kept au courant within this expeditiously transmuting industry.</p>

                    <p className='text-center text-white mt-10'>Follow me on:</p>
                    <span className='block'>
                        <a className='text-green-400 text-2xl shadow-lg shadow-slate-800 shadow-inner' href='https://www.linkedin.com/in/imdadul-haque-enan-168258241/' target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin mr-5"></i></a>
                        <a className='text-green-400 text-2xl shadow-lg shadow-slate-800 shadow-inner' href='https://github.com/Enan1006/' target="_blank" rel="noreferrer"><i class="fa-brands fa-github ml-5"></i></a>
                    </span>
                </div>
                <div>
                    <img className='translate-y-0 md:-translate-y-11' src={aboutImg} alt='' />
                </div>
                {/* <div className='grid grid-cols-2 gap-5 mr-6'>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-yellow-300'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={90} duration={5} />
                            <h2 className='text-xl text-blue-900'>Javascript</h2>
                        </div>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-green-300'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={90} duration={5} />
                            <h2 className='text-xl text-blue-900'>React JS</h2>
                        </div>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-indigo-500'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={60} duration={5} />
                            <h2 className='text-xl text-blue-900'>Node JS</h2>
                        </div>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-orange-500'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={50} duration={5} />
                            <h2 className='text-xl text-blue-900'>MongoDB</h2>
                        </div>

                    </div> */}
            </div>
        </>
    );
};

export default About;