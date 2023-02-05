import { createSlice } from "@reduxjs/toolkit";

export const todoSlicer = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        todosLength: 0,
    },
    reducers: {
        addTodo(state, action) {
            // const todo = {
            //     id: generateId(),
            //     text: action.payload,
            //     date: moment().calendar(),
            // };
            return [...state, action.payload];
        },
        logTodo(state, action) {
            console.log(state);

            return [...state];
        },
    },
});

export const { addTodo, logTodo } = todoSlicer.actions;

export default todoSlicer.reducer;
