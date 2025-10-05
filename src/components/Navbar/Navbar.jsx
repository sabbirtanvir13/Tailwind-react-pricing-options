import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
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
    const links = navItems.map(nav => <Link key={nav.id} nav={nav}></Link>)
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex gap-4' onClick={() => setOpen(!open)}>
                {open ?
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 bg-amber-200 text-black cursor-pointer
                    ${open?'top-8':'-top-40'}`}>
                    {
                        links
                    }
                </ul>

                <h3>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>

            <button>Sing in</button>
            {/* <ul className='flex items-center justify-items-end'>
                {
                    navItems.map(nav => <li className='mr-10 '><a href={nav.path}>{nav.name}</a></li>)
                }
 <button>Sing in</button>
            </ul>
            */}
        </nav>
    );
};

export default Navbar;