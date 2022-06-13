import React from 'react';
import './SinglePortfolio.css';
import { Link } from 'react-router-dom';

const SinglePortfolio = (props) => {
    const { _id, name, img, liveLink, clientSide } = props.portfolio;
    return (
        <div>
            <img className='screen w-3/4' src={img} alt='' />
            <span className='mt-5'>
                <a href={liveLink} target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-arrow-up-right-from-square text-white text-2xl mr-5 mt-5"></i>
                </a>
                <a href={clientSide} target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github text-white text-2xl ml-5 mt-5"></i>
                </a>
            </span>
        </div>
    );
};

export default SinglePortfolio;