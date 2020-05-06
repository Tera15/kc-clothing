import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';



const mapStateToProps = createStructuredSelector({
 isLoading: selectIsCollectionFetching
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

// using compose from redux can curry the HoC functions together. the above will look like :

// compose evaluates right to left soooo evaluates WithSpinner passing in CollectionsOverview to that then evaluates connect with WithSpinner(collectionsOverview)
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer