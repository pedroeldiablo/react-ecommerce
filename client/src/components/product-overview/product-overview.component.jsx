import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const ProductOverview = (props) => {
    console.log(props)

    if (props?.product?.product?.exists) {
        const { fields}  = props?.product?.product?._document?.proto
        console.log({fields});
        return (
            <>
                <div>Hi you've reached a pdp</div>
                <div>{props?.match?.params?.productId}</div>
                <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.name.stringValue : null }</div> 
                <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.style.stringValue : null }</div> 
                <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.price.integerValue : null }</div> 
                <img src={props.product.product._document.proto.fields?.imageUrl?.stringValue ? props.product.product._document.proto.fields.imageUrl.stringValue : null } alt=""></img>
            </>
    )} else {
        return (
            <>
                <div>Nothing to see here</div>
            </>
        )}
}

const mapStateToProps = state => {
    return {
      product: state.product
    };
  };

export default connect(mapStateToProps)(ProductOverview);
