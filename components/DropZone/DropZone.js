import { handleDragOver, handleDrop } from '@/helper/dragHelper';
import { addNode } from '@/redux/slices/flowSlice';

import { useDispatch } from 'react-redux';

const DropZone = ({ nodeKey }) => {
    const dispatch = useDispatch();

    const handleItemDrop = (e) => {
        const item = handleDrop(e);
        dispatch(addNode({ item , nodeKey}));
    }
    return (
        <div
            className='w-[250px] m-auto border-x border-b border-slate-300 bg-white py-2 px-4'
            onDragOver={(e) => handleDragOver(e)}  //draggable api html5
            onDrop={(e) => handleItemDrop(e)}  //draggable api html5
        >
            DropZone
        </div>
    )
}

export default DropZone