import React, { useEffect } from 'react';


import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStart} from '../../redux/shop/shop.actions';



import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';


import CollectionPageContainer from '../collection/collection.container';


const ShopPage = ({ match, fetchCollectionsStart }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
  

  
   
    //CollectionPageContainer and CollectionsOverviewContainer are using the container patter to keep state updates regarding spinner HoC -
    // where they belong with their respective components. (isloaded and isFetching should be handled through CollectionOverview and CollectionPage)
    return  (
      
      <div className='shop-page'>            
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
     
    ); 
  }




const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
