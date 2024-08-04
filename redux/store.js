import { configureStore } from "@reduxjs/toolkit";
import flowReducer from '@/redux/slices/flowSlice';

const store = configureStore({
    reducer: {
        flow: flowReducer,
    }
});

export default store;
