import React, {useEffect} from 'react';
import { connect } from 'react-redux';
// import {
//   useParams
// } from "react-router-dom";


// import Spinner from '../../components/spinner/spinner.component';

import { fetchProductStart } from '../../redux/product/product.actions';

// const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
// const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ProductDetailsPage = ({fetchProductStart, ...props}) => {
  // let { id } = useParams();
  // console.log("what is returned from this useParams?", id);
   
    
  useEffect(() => {
    console.log("What are the props", props);
    console.log("props.match.params.productId", props.match.params.productId)

    const productId = props.match.params.productId;
    console.log({productId})
    fetchProductStart(productId);
    // console.log("Quelle?", fetchProductStart())
    
  }, [fetchProductStart, props]);
// console.log("What are the props", props);
    return (
        <>
        <div>Hi you've reached a pdp</div>
        <div>{props.match.params.productId}</div>
        {/* <div>{fields.name}</div> */}
        </>
     
        // <div className='shop-page'>
        //    <Suspense fallback={<Spinner />}>
        //     <Route
        //       exact
        //       path={`${match.path}`}
        //       component={CollectionsOverviewContainer}
        //     />
        //     <Route
        //       path={`${match.path}/:collectionId`}
        //       component={CollectionPageContainer}
        //     />
        //    </Suspense>
        // </div>
     
    );
}

// const mapStateToProps = ({product: {_document : {proto : {fields}}}}) => ({ fields })

// function mapStateToProps(_state, ownProps) {
//   const { product } = ownProps

//   // component receives additionally:
//   return { product }
// }

const mapDispatchToProps = dispatch => ({
  fetchProductStart: (productId) => dispatch(fetchProductStart({productId}))

});

export default connect(
  null,
  mapDispatchToProps
)(ProductDetailsPage);

// export default ProductDetailsPage;
