import { nanoid } from "@reduxjs/toolkit";

const addSingleNode = (state, item, nodeKey) => {
    //creating new key for every node using nanoid
    const newNanoId = nanoid(5);
    const currentKey = newNanoId;

    //adding new node in current state
    state[currentKey] = {
        ...item,
        prevNodeKey: null,
        nextNodeKey: null
    };

    //check if next node is present or not if yes it means new node dropped in b/w nodes
    if (state[nodeKey]) {
        if (state[nodeKey].nextNodeKey) {
            //swaping nextNodekey and prevNodeKey
            const nextKey = state[nodeKey].nextNodeKey;
            state[currentKey].nextNodeKey = nextKey;
            state[nextKey].prevNodeKey = currentKey;
        }

        state[currentKey].prevNodeKey = nodeKey;
        state[nodeKey].nextNodeKey = currentKey;
    }
    // node added at the end of the flow 
    else {
        state[currentKey].prevNodeKey = nodeKey;
        state[nodeKey].nextNodeKey = currentKey;
    }
    return;
}

const addSplitterNode = (state, item, nodeKey) => {
    // condition for not adding splitter-node in b/w flow
    if (state[nodeKey].nextNodeKey !== null) return;
    const currentKey = nanoid(5);
    const newNodeKey_1 = nanoid(5);
    const newNodeKey_2 = nanoid(5);

    state[nodeKey].nextNodeKey = currentKey;

    switch (item.name) {
        case 'Switch':  // for node name switch
            const newNodeKey_3 = nanoid(5);

            state[currentKey] = {
                ...item,
                prevNodeKey: nodeKey,
                nextNodeKey: [{ id: newNodeKey_1 }, { id: newNodeKey_2 }, { id: newNodeKey_3 }]  //creating branches
            }

            // adding decision- node or branches into flow
            state[newNodeKey_1] = { id: '7-1', name: 'First', type: 'decision-node' }
            state[newNodeKey_1].prevNodeKey = currentKey;

            state[newNodeKey_2] = { id: '7-2', name: 'Second', type: 'decision-node' }
            state[newNodeKey_2].prevNodeKey = currentKey;

            state[newNodeKey_3] = { id: '7-1', name: 'Third', type: 'decision-node' }
            state[newNodeKey_3].prevNodeKey = currentKey;
            return

        default: // for nopde name conditonal split
            state[currentKey] = {
                ...item,
                prevNodeKey: nodeKey,
                nextNodeKey: [{ id: newNodeKey_1 }, { id: newNodeKey_2 }]  //creating branches
            }
            // adding decision- node or branches into flow
            state[newNodeKey_1] = { id: '6-1', name: 'Yes', type: 'decision-node' }
            state[newNodeKey_1].prevNodeKey = currentKey;

            state[newNodeKey_2] = { id: '6-2', name: 'No', type: 'decision-node' }
            state[newNodeKey_2].prevNodeKey = currentKey;
            return;
    }
}

export const addNodeUtil = (state, action) => {
    const { item, nodeKey } = action.payload;

    switch (item.type) {
        case 'node':
            addSingleNode(state, item, nodeKey)
            return;
        case 'splitter-node':
            addSplitterNode(state, item, nodeKey)
            return;
    }

};


export const deleteNodeUtil = (state, action) => {

    const key = action.payload;

    const nodeToDelete = state[key];
    //if user delete single node from flow
    if (nodeToDelete.type === 'node') {
        const prevNodeKey = nodeToDelete.prevNodeKey;
        const nextNodeKey = nodeToDelete.nextNodeKey;

        if (prevNodeKey) {
            if (nextNodeKey) {
                state[prevNodeKey].nextNodeKey = nextNodeKey;
            } else {
                state[prevNodeKey].nextNodeKey = null;
            }
        }

        if (nextNodeKey) {
            if (prevNodeKey) {
                state[nextNodeKey].prevNodeKey = prevNodeKey;
            } else {
                state[nextNodeKey].prevNodeKey = null;
            }
        }

        delete state[key];
    }
    return;
};