import { all, call } from 'redux-saga/effects'

import { shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas'

export default function* rootSaga(){
    yield all([
        call(shopSagas), // can use fetchCollectionsStart() to invoke function but call() is best practice
        call(userSagas),
        call(cartSagas)
    ]);
}

// yield all() lets us take any number of sagas inside the array and initialize them all at the same to run on their own seperate task streams.