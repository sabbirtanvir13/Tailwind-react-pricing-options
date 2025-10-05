import { Check } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({features}) => {
    return (
       <p className='flex mt-2'><Check></Check>{features}</p>
    );
};

export default PricingFeatures;