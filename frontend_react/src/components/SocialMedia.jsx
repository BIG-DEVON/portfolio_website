import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div>

            <BsTwitter />

        </div>

        <div>

            <FaFacebook />

        </div>



        <div>

            <BsInstagram />

        </div>

        <div>

        <FaGithub />

        </div>

        
       



    </div>
    )
}

export default SocialMedia;