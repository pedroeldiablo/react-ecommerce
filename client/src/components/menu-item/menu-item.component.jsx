import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer } from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match, index }) => (
    <MenuItemContainer className="framed" onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className={`background-image item-${index}`} style={{ 
            backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
