import React from 'react';
import { connect } from 'react-redux';
import styled  from 'styled-components'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const PageGrid = styled.div`
max-width: 100vw;
display: grid;
grid-template-columns: repeat(2, 1fr);
`

const ProductSpecifics = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: space-around;

dd {
    margin-inline-start: 0px;
}
`

const ProductImage = styled.div`
grid-column: 1 / 1;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;



img {
    width: 100%;
}
`

// import { createStructuredSelector } from 'reselect';
// import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const ProductOverview = (props) => {
    console.log(props)

    if (props?.product?.product?.exists) {
        const { fields}  = props?.product?.product?._document?.proto
        console.log({fields});
        return (
            <PageGrid>
                <ProductImage>
                    <img src={props.product.product._document.proto.fields?.imageUrl?.stringValue ? props.product.product._document.proto.fields.imageUrl.stringValue : null } alt=""></img>
                </ProductImage>
                <ProductSpecifics>
                <h1>{props.product.product ? props.product.product._document.proto.fields.name.stringValue : null }</h1> 
                <div>{props.props?.match?.params?.productId}</div>
                <h2>{props.product.product ? props.product.product._document.proto.fields.style.stringValue : null }</h2> 
                <h3>£{props.product.product ? props.product.product._document.proto.fields.price.integerValue : null }</h3> 
                <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Delivery and returns -  free returns on all orders
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    <dl>
                        <dt>Delivery Methods</dt>
                        <dd>Standard   £5</dd>
                        <dd>Next Day   £7</dd>
                        <dd>Collect In Store   Free</dd>
                        <dd>Standard   £5</dd>
                    </dl>

Free returns on all UK orders extended to 4th January 2021.
Orders placed on Friday after 7:00pm will be delivered on Tuesday
For next working day delivery please order before 7:00pm

For same day delivery within London please order before 1:00pm
For Saturday delivery please order before 3:00pm on Friday

All orders will be delivered by courier and will need to be signed for
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Blah
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
                </ProductSpecifics>
            </PageGrid>
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
