import { createSelector } from 'reselect';

const selectShop = state => state.shop; //shop is from rootReducer where {shop: shopReducer}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections // collections is from shopReducer INITIAL_STATE
);

//converting object key to array and mapping for collection-overview
export const selectCollectionsForPreview = createSelector(
[selectCollections],
collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null) 
  );

export const selectIsCollectionFetching = createSelector(
   [selectShop],
   shop => shop.isFetching
 );


