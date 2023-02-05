import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlicer";

export default configureStore({
    reducer: {
        todoReducer: todoReducer,
    },
});
