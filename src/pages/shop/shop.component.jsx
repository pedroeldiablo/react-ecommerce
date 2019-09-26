import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selector';


const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <h1>Collection</h1>
        { collections.map(( { id, ...otherCollectionProps } ) => (
            <CollectionPreview key={id} { ...otherCollectionProps }/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection,
  
  });
  
  
  export default connect(mapStateToProps)(ShopPage);
