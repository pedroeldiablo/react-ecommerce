import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { motion } from "framer-motion";

import './collections-overview.styles.scss';

const transition = { duration: 2.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

const CollectionsOverview = ({ collections }) => (
    <motion.div 
    initial='initial'
    animate='animate'
    exit='exit'
    variants={loadItems}
    transition={transition}
    className='collections-overview'>
         { collections.map(( { id, ...otherCollectionProps } ) => (
            <CollectionPreview key={id} { ...otherCollectionProps }/>
        ))}
    </motion.div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  
  });

export default connect(mapStateToProps)(CollectionsOverview);
