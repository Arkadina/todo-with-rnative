import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { generateId } from "../utils/generateId";

export const todoSlicer = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                todo: "First Item",
                time: "10",
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                todo: "Second Item",
                time: "10",
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                todo: "Third Item",
                time: "10",
            },
        ],
        todosLength: 3,
    },
    reducers: {
        addTodo(state, action) {
            console.log(action.payload);
            let newTodo = [
                ...state.todos,
                {
                    id: generateId(),
                    todo: action.payload,
                    time: moment().calendar(),
                },
            ];

            let newState = {
                todos: [...newTodo],
                todosLength: state.todosLength + 1,
            };

            console.log(newState);

            return { ...newState };
        },
        removeTodo(state, action) {
            let newTodo = state.todos.filter(
                (item) => item.id != action.payload
            );

            let newState = {
                todos: [...newTodo],
                todosLength: state.todosLength - 1,
            };

            return { ...newState };
        },
    },
});

export const { addTodo, removeTodo } = todoSlicer.actions;

export default todoSlicer.reducer;
