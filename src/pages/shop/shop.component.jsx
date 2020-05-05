import React, { useEffect } from 'react';


import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStart} from '../../redux/shop/shop.actions';



import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';


import CollectionPageContainer from '../collection/collection.container';






//match comes from route, it is one of three props passed into component nested in <Route />
// match location and history passed as props from route.

// telling route that the route name is going to be a parameter by using `${}`
//to tell it which item exactly we want to fetch

// `${match.path}` gives us current path, in this case /shop

//`${match.path}:/categoryId` allows us to dynamicly pick the right category out of our reducer 

//:/catergoryId comes from the match.path object

//console.log(match) and inspect the object to see where categoryID comes from to better understand 

// HoC





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
