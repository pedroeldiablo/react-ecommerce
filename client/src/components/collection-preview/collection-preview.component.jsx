import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { motion } from "framer-motion";

import './collection-preview.styles.scss';

//Components
//Ease
const transition = { duration: 1.4, ease: [0.7, 0, .3, 1] };

const slideTitle = {
  initial: {
    x: -300,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
      ...transition
    },
  },
};

const CollectionPreview = ({ title, items, id }) => (
    <motion.div 
        initial="initial"
        animate="animate"
        transition={transition}
        className='collection-preview' key={id}>
        <motion.h1 variants={slideTitle} className='title'>{ title } </motion.h1>
        <div className='preview'>
        { items
        .filter((item, idx) => idx < 4)
        .map((item) => (
            <CollectionItem key={item.id} item={item} />
        ))
        }
        </div>
    </motion.div>
)

export default CollectionPreview;
