import {put, takeLatest} from '@redux-saga/core/effects';

import { fetchOutfitsSuccess } from '../actions/outfits';


function* fetchOutfits(action) {
    try {
        const outfits = [{}];
        yield put(fetchOutfitsSuccess(outfits));
    } catch (error) {
        yield put({ type: 'outfits/fetchOutfitsFailed', error: error, isLoading: false });
    }
}

function* outfitsSaga() { yield takeLatest('outfits/fetchOutfitsRequested', fetchOutfits); }


export default outfitsSaga;