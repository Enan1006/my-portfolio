import React from 'react';
import CountUp from 'react-countup';
import Reveal from 'react-reveal/Reveal';


const About = () => {
    return (
        <>
            <Reveal effect="fadeInUp">
                <div className='grid grid-cols-1 md:grid-cols-2  py-24 mx-5 md:pl-10 gap-7'>
                    <div>
                        <h3 className='text-rose-600 text-xl text-left mb-3 font-semibold'>||  About me</h3>
                        <h2 className='text-4xl font-bold text-blue-900 text-left mb-4'>Imdadul Haque Enan</h2>
                        <p className='text-left'>I’m Imdadul Haque Enan, presently pursuing a BSc in Electronics and Information Engineering. Lately I have find my interest on programming. So, I decided to explore programming and learning core concepts.  I’m extremely enthusiastic about programming, collecting knowledge and using it in a broad way. I am a positive, exuberant and competent guy. Who, over the months, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. I take my work as a Web Developer earnestly, and this betokens I always ascertain my skills are kept au courant within this expeditiously transmuting industry.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mr-6'>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-yellow-300'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={90} duration={2} />
                            <h2 className='text-xl text-blue-900'>Javascript</h2>
                        </div>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-green-300'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={90} duration={2} />
                            <h2 className='text-xl text-blue-900'>React JS</h2>
                        </div>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-indigo-500'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={60} duration={2} />
                            <h2 className='text-xl text-blue-900'>Node JS</h2>
                        </div>
                        <div className='p-5 border-2 rounded-l-3xl rounded-r-3xl border-orange-500'>
                            <CountUp className='text-blue-900 text-4xl font-bold' end={50} duration={2} />
                            <h2 className='text-xl text-blue-900'>MongoDB</h2>
                        </div>

                    </div>
                </div>
            </Reveal>
        </>
    );
};

export default About;