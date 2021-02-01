import React, { useEffect, useState, lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { motion } from "framer-motion";
// import { motion, useViewportScroll, useTransform } from "framer-motion";

// import ScrollForMore from "../components/scrollForMore";
import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

//Components
//Ease
const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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
      className='shop-page single framed'
      transition={transition}
      // exit='exit'
      >
           <Suspense fallback={<Spinner />}>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            />
           </Suspense>
        </motion.div>
     
    );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())

});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
