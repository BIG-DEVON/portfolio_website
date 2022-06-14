import React from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client } from '../../client';
import './Footer.scss';

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);