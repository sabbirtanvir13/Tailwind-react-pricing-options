import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCart = ({ pricing }) => {
    const { title, price, description, features, buttonText, period } = pricing
    return (
        <div className='border bg-amber-500 shadow-xl p-4 rounded-2xl text-white'>
            <div>
                <h1 className='text-4xl'>{title}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            <div>
                <p >{description}</p>
                {
                    features.map((features, index) => <PricingFeatures key={index} features={features}></PricingFeatures>)

                }
                <span className='flex justify-between mt-3'>
                    <h4 className='bg-cyan-100 rounded text-black p-2'>{period}</h4>
                    <button className='bg-purple-500 w-[100px] h-[40px] rounded-2xl'>{buttonText}</button>
                </span>

            </div>
        </div>
    );
};

export default PricingCart;