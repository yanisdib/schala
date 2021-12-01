import { all, fork } from '@redux-saga/core/effects';

import { outfitsSaga } from '.';


export default function* () { yield all([fork(outfitsSaga)]); }