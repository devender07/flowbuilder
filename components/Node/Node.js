import React from 'react';
import { Box } from '@mui/material';
import DropZone from '../DropZone/DropZone';
import { deleteNode } from '@/redux/slices/flowSlice';
import { useDispatch } from 'react-redux';

const Node = ({ node, nodes, nodeKey }) => {
    const dispatch = useDispatch();

    // Render the next nodes recursively
    const renderNextNodes = (nextNodeKey) => {

        // If nextNodeKey is an array, render each node(decision node)
        if (Array.isArray(nextNodeKey)) {
            return nextNodeKey.map((node) => (
                <Box key={node.id} >
                    <Node node={nodes[node.id]} nodes={nodes} nodeKey={node.id} /> 
                </Box>
            ));
        }

        // If nextNodeKey is a string, render the single node
        if (typeof nextNodeKey === 'string' && nodes[nextNodeKey]) {
            return (
                <Node node={nodes[nextNodeKey]} nodes={nodes} nodeKey={nextNodeKey} />
            );
        }

        return null;
    };

    // Handle the deletion of the node
    const handleDelete = () => {
        dispatch(deleteNode(nodeKey));
    };

    return (
        <Box className='flex flex-col jsustify-center items-center' >
            <Box className='w-[300px]'>
                <Box className='w-[300px] border border-slate-300 bg-white rounded-md py-2 px-4'>
                    <h3>{node.name}</h3>
                    <p>ID: {node.id}</p>
                    <p>Node Key: {nodeKey}</p>
                    <p>Previous Node Key: {node.prevNodeKey || 'null'}</p>
                    <p>Next Node Key: {Array.isArray(node.nextNodeKey) ? 'Multiple' : node.nextNodeKey || 'null'}</p>
                    {node.name !== 'Trigger' && <button onClick={handleDelete}>Delete</button>}
                </Box>
                {/* drop zone only for node */}
                {node.type !=='splitter-node' &&<DropZone nodeKey={nodeKey} />} 
            </Box>
            <Box className='flex justify-center'>
                {renderNextNodes(node.nextNodeKey)}
            </Box>
        </Box>
    );
};

export default Node;
