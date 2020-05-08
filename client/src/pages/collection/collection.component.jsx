import React from 'react';
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors';


import {CollectionPageDivContainer, ItemsContainer, CollectionItemContainer } from './collection.styles'

const CollectionPage = ({ collection, match }) => {

  console.log(match, collection)
  const { title, items } = collection;
    return (
      <CollectionPageDivContainer>
        <h2 className='title'>{title}</h2>
        <ItemsContainer>
          {items.map(item => (
            <CollectionItemContainer key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </CollectionPageDivContainer>
    );
  };
  

//ownProps is secondary parameter to mapStateToProps and it represents
//the props of the component being wrapped in connect.
//using to get match.params.collectionId in mapStateToProps
//state passed in after ownProps because selector needs a part of the state depending
//on the URL parameter. *curried function* state is passed into the function returned
//from the first functon


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);



