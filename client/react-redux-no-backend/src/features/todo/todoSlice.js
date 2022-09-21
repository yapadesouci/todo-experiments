import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [{
            id: uuidv4(),
            description: 'Add another component to Tailwind Components',
            completed: false
        },{
            id: uuidv4(),
            description: 'Submit Todo App Component to Tailwind Components',
            completed: true
        }],
    },
    reducers: {
        add: (state, action) => {
            state.value = [action.payload, ...state.value]
        },
        remove: (state, action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload)
        },
        updateStatus: (state, action) => {
            state.value.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }

                return todo
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, remove, updateStatus } = todoSlice.actions

export default todoSlice.reducer