import React, { use } from 'react';
import PricingCart from '../pricingCart/PricingCart';

const PricingOptions = ({pricingpremise}) => {
    const pricingData=use(pricingpremise)
    console.log(pricingData)
    return (
        <div >
           <h2 className='text-5xl text-center mt-8'>Get Our MamberShip</h2> 
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                pricingData.map(pricing=><PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
            }
           </div>
        </div>
    );
};

export default PricingOptions;