import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { motion} from "framer-motion";
// import { motion, useViewportScroll, useTransform } from "framer-motion";

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

  const dropTitle = {
    initial: {
      y: -200,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

const loadItems = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

const CollectionPage = ({ collection }) => {
   const { title, items } = collection;
//    const { scrollYProgress } = useViewportScroll();
//    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
 
   const [canScroll, setCanScroll] = useState(false);
 
   useEffect(() => {
     if (canScroll === false) {
       document.querySelector("body").classList.add("no-scroll");
     } else {
       document.querySelector("body").classList.remove("no-scroll");
     }
   }, [canScroll]);
    
  return (

    <motion.div 
    onAnimationComplete={() => setCanScroll(true)}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={dropTitle}
    className="collection-page framed">
        <motion.h2 variants={dropTitle} className='title'>{title}</motion.h2>
        <motion.div className='items' variants={loadItems}>
            {
                items.map(item => <CollectionItem key={item.id}  item={item}/>)
            }
        </motion.div>
    </motion.div>
  )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
