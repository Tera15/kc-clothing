import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.compnent';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


//match comes from route, it is one of three props passed into component nested in <Route />
// match location and history passed as props from route.

// telling route that the route name is going to be a parameter by using `${}`
//to tell it which item exactly we want to fetch

// `${match.path}` gives us current path, in this case /shop

//`${match.path}:/categoryId` allows us to dynamicly pick the right category out of our reducer 

//:/catergoryId comes from the match.path object

//console.log(match) and inspect the object to see where categoryID comes from to better understand 




class ShopPage extends React.Component {

  unsubscribeFromSnapshop = null
  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections'); // collections collection in firestore
    // whenever snapShot updates, or mounts for the first time firebase sends snapShot of 
    //collection objects array at the time of mount/update
    this.unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
     updateCollections(collectionsMap);
    
    });
  }

  render() {
    const { match } = this.props
  return  (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
