import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (    
        <div className='navBar'>
            <div className='stocks'>
                <Link to="/">Home</Link>
            </div>
            <div className='favourites'>
                <Link to="/favourites">Our Cars</Link>
        </div>
            <div className='cart'>
                <Link to="/cart">Contact</Link>
            </div>
        </div>
    )

}

export default Navbar;