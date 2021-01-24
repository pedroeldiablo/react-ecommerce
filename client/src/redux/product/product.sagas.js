import { takeLatest, call, all, put } from 'redux-saga/effects';

import { firestore } from '../../firebase/firebase.utils';

import { fetchProductSuccess, fetchProductFailure, } from './product.actions';

import ProductActionTypes from './product.types';

export function* fetchProductAsync(productId){
     console.log("What is productId", productId);
    //  const productIdn = "sykk7rzEw3FxidbFUh4Q";
   
    try {
        const productRef = firestore.collection('products').doc(productId.payload);
        console.log("productRef", productRef);
        const snapshot = yield productRef.get()
        yield put(fetchProductSuccess(snapshot));
       
    } catch (error) {
        yield put(fetchProductFailure(error.message));
    }   
}


export function* fetchProductStart() {
    // console.log("What is payload?", payload );
    // const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield takeLatest(
        ProductActionTypes.FETCH_PRODUCT_START, 
        fetchProductAsync
    );
}

export function* productSagas() {
    yield all([
        call(fetchProductStart),
    ]);
}
