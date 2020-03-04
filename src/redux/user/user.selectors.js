import { createSelector } from 'reselect';

//input selector
const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
    // array of input selectors. alternatively can be passed in as arguments.
[selectUser], 
(user) => user.currentUser
);