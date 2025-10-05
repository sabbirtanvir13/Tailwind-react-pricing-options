import React from 'react';

const Link = ({nav}) => {
    return (
       <li className='lg:mr-10  px-4 hover:bg-pink-400 rounded-3xl'>
        <a  href={nav.link}>{nav.name}</a>
       </li>
    );
};

export default Link;