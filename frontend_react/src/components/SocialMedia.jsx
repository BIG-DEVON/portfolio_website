import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { useState, useEffect } from 'react';


const SocialMedia = () => {


    const [url, setUrl] = useState('')
    
  return (
    <div className='app__social'>

        <div> 
        <a target="_blank" href={"https://twitter.com/Devon5335"} >
            <BsTwitter  />
            </a> 
        </div>


        <div>
        <a target="_blank" href={""} >
            <BsInstagram />
            </a>
        </div>

        <div>
        <a target="_blank" href={" https://github.com/BIG-DEVON"} >
        <FaGithub  />
        </a>

        </div>

        
       



    </div>
    )
}

export default SocialMedia;