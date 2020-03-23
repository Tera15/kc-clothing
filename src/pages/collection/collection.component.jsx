import React from 'react';
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, match }) => {

  console.log(match, collection)
  const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
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



