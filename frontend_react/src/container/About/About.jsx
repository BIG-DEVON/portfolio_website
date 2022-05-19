import React from 'react';
import {motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './About.scss';

 /* const abouts = [
  { title: 'Web Developmment & Design' , description: 'I am a passionate frontend Developer ready to bring your imaginations to life.' , imgUrl: images.about01},
  { title: 'Web  ' , description: 'I am a good web developer ' , imgUrl: images.about02},
  { title: 'Frontend' , description: '  ' , imgUrl:  images.about03},
  { title: 'Cloud Computing' , description: 'Up and ready to to provide soft solutions to clients tasks. ' , imgUrl:images.about04},
]; */


  const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) =>    setAbouts(data))

  
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I Know that 
      <span> Great Dev</span>
      <br/>
        Means
      <span> Great Business</span>
      </h2>


      <div className='app__profiles'> 
      {abouts.map((about, index) => (

        <motion.div   
        whileInView={{ opacity : 1}}

        whileHover= {{ scale:1.1 }}

        transition = { { duration: 0.5, type: 'tween'}}

        className = "app__profile-item"
        key = {about.title + index }

        >

        <img src={urlFor(about.imgUrl)} alt={about.title}/>
        <h2 className='bold-text ' style={{marginTop: 20 }} > {about.title } </h2>
        <p className='p-text ' style={{marginTop: 10 }} >{about.description} </p>


        </motion.div>
      ))}
      </div>
    </>
  )
}

export default About