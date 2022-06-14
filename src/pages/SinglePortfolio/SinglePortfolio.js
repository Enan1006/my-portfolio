import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const SinglePortfolio = () => {
    const { portfolioId } = useParams();

    const [portfolios, setPortfolios] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Enan1006/my-portfolio/main/public/portfolios.json')
            .then(Response => Response.json())
            .then(data => {
                const port = data.find(singlePortfolio => singlePortfolio._id == portfolioId);
                setPortfolios(port);
                console.log(data, portfolioId)
                // setPortfolios(data);
            })
    }, [portfolioId])


    return (
        <div className='text-white text-2xl'>
            <h2>Detail of: {portfolioId}</h2>
            <div className='mt-20'>
                <h1 className='bg-indigo-900 px-7 py-2 my-5 rounded-lg text-white'>Project: {portfolios.name}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                    <div>
                        <img src={portfolios.img} className='w-1/2 mx-auto' alt='' />
                    </div>
                    <div>
                        <div className='bg-transparent shadow-lg mr-5 rounded-lg mt-10 md:mt-0 shadow-slate-900'>
                            <h1>View</h1>
                            <button className='bg-indigo-900 px-7 py-2 my-5 rounded-lg text-white'>
                                <a href={portfolios.liveLink} target="_blank" rel="noreferrer">
                                    <i class="fa-solid fa-arrow-up-right-from-square text-white text-2xl mr-4"></i>Live preview
                                </a></button>
                            {
                                JSON.stringify(portfolios)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePortfolio;