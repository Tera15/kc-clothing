import { all, call, takeLatest, put} from 'redux-saga/effects';

import  UserActionTypes  from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
};

// subscribes to an action type to be dispatched. if action type comes through, runs clearCartOnSignOut.
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut )
};

export function* cartSagas() {
    yield(all([call(onSignOutSuccess)]))
};