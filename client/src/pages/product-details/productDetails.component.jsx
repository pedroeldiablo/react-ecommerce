import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchProductStart } from '../../redux/product/product.actions';
import ProductOverview from '../../components/product-overview/product-overview.component'

const ProductDetailsPage = ({fetchProductStart, ...props}) => {
  const productId = props.match.params.productId;
  useEffect(() => {
    fetchProductStart(productId);  
  }, [fetchProductStart, productId]);
    return (
        <>
        <div>Hi you've reached a pdp</div>
        <div>{props.match.params.productId}</div>

       { props?.product?.product?.exists ? 
        <>
        <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.name.stringValue : null }</div> 
        <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.style.stringValue : null }</div> 
        <div>Product Id from product {props.product.product ? props.product.product._document.proto.fields.price.integerValue : null }</div> 
        <img src={props?.product?.product?._document?.proto?.fields?.imageUrl?.stringValue ? props.product.product._document.proto.fields.imageUrl.stringValue : null } alt=""></img>
        </>
        :
        <div>Nothing to see here</div>
       }  
       <ProductOverview props={props}/>
        </>
    );
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProductStart: (productId) => dispatch(fetchProductStart({productId}))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsPage);
