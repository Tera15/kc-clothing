import { all, call } from 'redux-saga/effects'

import {  fetchCollectionsStart } from './shop/shop.sagas'

export default function* rootSaga(){
    yield all([
        call(fetchCollectionsStart) // can use fetchCollectionsStart() to invoke function but call() is best practice
    ])
}

// yield all() lets us take any number of sagas inside the array and initialize them all at the same to run on their own seperate task streams.