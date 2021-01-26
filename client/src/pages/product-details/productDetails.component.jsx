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
