import React from 'react';
const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
    return (
       <nav>
        <ul className='flex items-center justify-items-end'>
        {
           navItems.map(nav=><li className='mr-10 '><a href={nav.path}>{nav.name}</a></li>) 
        }

        </ul>

       </nav>
    );
};

export default Navbar;