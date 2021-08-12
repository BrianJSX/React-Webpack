import createSagaMiddleware from '@redux-saga/core';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import saga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ serializableCheck: false, thunk: false }), sagaMiddleware];
const devMode = process.env.NODE_ENV === 'development';

export default configureStore({
    reducer: {
    },
    middleware,
    devTools: devMode,
});

sagaMiddleware.run(saga);