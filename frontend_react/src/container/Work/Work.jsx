import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Work.scss'
//import { Item } from 'framer-motion/types/components/Reorder/Item';

const Work = () => {
  
  const [activeFilter, setactiveFilter] = useState('All')

  const handleWorkFilter = (item) => {

  }
  return (
    <>

<h2 className='head-text'>
       My Creative
      <span> Portfolio </span>
      <br/>
        
      <span> </span>
      </h2>

      <div className='app__work-filter'> </div>
      {[ 'web App','web Animations', 'React JS', 'All'].map(( item, index ) => ( 
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >

        </div>
      )) }


    </>
  )
}

export default Work