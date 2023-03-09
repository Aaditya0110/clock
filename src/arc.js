import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "../src/timeSlice";


export const store = configureStore({
    reducer: {
        timer: timerReducer,
    },
}
)