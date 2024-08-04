import { createSlice } from "@reduxjs/toolkit";
import { addNodeUtil, deleteNodeUtil } from '@/helper/nodeCrudHelpers';

// trigger node already in the state to start building flow
const initialState = {
    start: {
        id: 1,
        name: 'Trigger',
        type: 'node',
        data: {},
        prevNodeKey:null,
        nextNodeKey:null
    }
}
// flowSlice

const flowSlice = createSlice({
    name: 'flowSlice',
    initialState,
    reducers: {
        addNode: (state, action) => {
            addNodeUtil(state, action);
        },
        deleteNode: (state, action) => {
            deleteNodeUtil(state,action)
        }
    }
});

export const { addNode, deleteNode } = flowSlice.actions;

export default flowSlice.reducer;