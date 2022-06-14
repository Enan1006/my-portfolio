import React from 'react';
import './SinglePortfolio.css';
import { Link, useNavigate } from 'react-router-dom';

const SinglePortfolio = ({ portfolio }) => {
    const { _id, name, img, liveLink, clientSide } = portfolio;
    const navigate = useNavigate();
    const portfolioDetail = () => {
        navigate(`/portfolio/${_id}`)
    }
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
            <br />
            <button className='bg-indigo-900 px-7 py-2 my-5 rounded-lg text-white' onClick={() => portfolioDetail(_id)}>Details</button>
        </div>
    );
};

export default SinglePortfolio;