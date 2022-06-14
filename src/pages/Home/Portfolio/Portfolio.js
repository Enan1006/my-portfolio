import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SinglePortfolio from '../SinglePortfolio/SinglePortfolio';


const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        // const url = `portfolio.json`;
        fetch('portfolios.json')
            .then(Response => Response.json())
            .then(data => setPortfolios(data))
    }, [])
    return (
        <div>
            <div className=' py-28 px-5 md:pl-20'>
                <h2 className=' text-transparent text-xl  mb-3 font-semibold mb-20 text-outline opacity-30'>Portfolio</h2>
                <h1 className='text-4xl font-bold text-white mb-4'>What I have done</h1>

                <div className='grid grid-cols-1 mt-16 md:grid-cols-3'>
                    {
                        portfolios.map(portfolio => <SinglePortfolio
                            portfolio={portfolio}
                            id={portfolio._id}
                        >

                        </SinglePortfolio>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;