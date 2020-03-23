import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.compnent';
import CollectionPage from '../collection/collection.component';


//match comes from route, it is one of three props passed into component nested in <Route />
// match location and history passed as props from route.

// telling route that the route name is going to be a parameter by using `${}`
//to tell it which item exactly we want to fetch

// `${match.path}` gives us current path, in this case /shop

//`${match.path}:/categoryId` allows us to dynamicly pick the right category out of our reducer 

//:/catergoryId comes from the match.path object

//console.log(match) and inspect the object to see where categoryID comes from to better understand 




const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
