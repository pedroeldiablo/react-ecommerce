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
  const productId = props.match.params.productId;
    
  useEffect(() => {
    console.log("What are the props", props);
    console.log("props.match.params.productId", props.match.params.productId)

   
    console.log({productId})
    fetchProductStart(productId);
    // console.log("Quelle?", fetchProductStart())
    
  }, [fetchProductStart, productId]);
console.log("What are the props.product", props.product);
    return (
        <>
        <div>Hi you've reached a pdp</div>
        <div>{props.match.params.productId}</div>
      
        <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.name.stringValue : null }</div> 
        <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.style.stringValue : null }</div> 
        <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.price.integerValue : null }</div> 
        <img src={props?.product?.product?._document?.proto?.fields?.imageUrl?.stringValue ? props.product.product._document.proto.fields.imageUrl.stringValue : null } ></img>
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

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProductStart: (productId) => dispatch(fetchProductStart({productId}))

});


// const  mapStateToProps = (state) => {
//   const { product } = state
//   return { product};
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsPage);

// export default ProductDetailsPage;
