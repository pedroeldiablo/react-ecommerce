import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { motion } from "framer-motion";

import './directory.styles.scss'

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const firstName = {
    initial: {
      x: 0,
      // backgroundColor: "#ffddff",
    },
    animate: {
      x: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.24,
        staggerDirection: 1,
        ...transition
      },
      transitionEnd: {  
        // backgroundColor: "#000",  
      },
    },
  };

const Directory  = ({ sections }) => (
    <motion.div 
    initial="initial"
    animate="animate"
    className="directory-menu framed firstName"
    variants={firstName}
    transition={transition}
    >
        { sections.map(({id, ...otherSectionProps }, index) => (
            <MenuItem key={id} {...otherSectionProps} index={index}/>

        ))}
    </motion.div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,

});


export default connect(mapStateToProps)(Directory);
