import { all, call } from "typed-redux-saga/macro";

import { categoiresSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
    yield* all([call(categoiresSaga), call(userSagas)]);
}
