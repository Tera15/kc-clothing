import React from 'react';

import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.compnent';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';





//match comes from route, it is one of three props passed into component nested in <Route />
// match location and history passed as props from route.

// telling route that the route name is going to be a parameter by using `${}`
//to tell it which item exactly we want to fetch

// `${match.path}` gives us current path, in this case /shop

//`${match.path}:/categoryId` allows us to dynamicly pick the right category out of our reducer 

//:/catergoryId comes from the match.path object

//console.log(match) and inspect the object to see where categoryID comes from to better understand 

// HoC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)



class ShopPage extends React.Component {

  componentDidMount() {
   const { fetchCollectionsStartAsync } = this.props
   fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching } = this.props;
  return  (
    // render being used to use HoC spinner with collectionsOverview and CollectionPage components
    // this is how to render props down through into the components
      <div className='shop-page'>           
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
      </div>
    ); 
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching 
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
