import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.compnent';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


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
//React will invoke constructor and super for us.
state = {
  loading: true
}

  unsubscribeFromSnapshop = null
  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections'); // collections collection in firestore
    // whenever snapShot updates, or mounts for the first time firebase sends snapShot of 
    //collection objects array at the time of mount/update
    this.unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
     updateCollections(collectionsMap);
    this.setState({ loading: false })
    });
  }

  render() {
    const { match, } = this.props;
    const { loading } = this.state;
  return  (
    // render being used to use HoC spinner with collectionsOverview and CollectionPage components
    // this is how to render props down through into the components
      <div className='shop-page'>           
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    ); 
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
