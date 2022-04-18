
import { HiMenuAlt4, Hix } from 'react-icons/hi';
import { useState } from 'react';
import { Provider } from 'react';
import { icons } from 'react-icons/lib';

import { motion } from 'framer-motion';



import './Navbar.scss'
import { images } from '../../constants';

const Navbar = () => {

    const [toggle , setToggle] = useState(false);
    return (
        <nav  className='app__navbar'> 
        
            <div className='app__navbar-logo'>

                <img src={images.logo} alt= "logo" />
        
            </div>

            <ul className='app__navbar-links '>
            {['homes ', 'about' , 'work', 'skills', 'contact'].map((item) => (

                <li className='app__flex p-text' key={`link-${item}`}>

                    <div/>
                    <a  href={`#${item}`}> {item} </a>

                </li>

            ))}

            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                    whileInView={{ x: [300,0]}}
                    transition={{  duration: 0.85, ease: 'easeOut'}}
                    
                    >

                    </motion.div>

                    ) }

            </div>

     </nav>
    )
}

export default Navbar
