import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, id }) => (
    <div className='collection-preview' key={id}>
        <h1 className='title'>{ title } </h1>
        <div className='preview'>
        { items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id}{ ...otherItemProps}></CollectionItem>

        ))
        }
        </div>
    </div>
)

export default CollectionPreview;
