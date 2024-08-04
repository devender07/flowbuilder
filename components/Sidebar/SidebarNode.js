'use client'
import { Box } from '@mui/material'
import { handleDragStart, handleDragOver } from '@/helper/dragHelper'

const SidebarNode = ({ node }) => {
    return (
        <Box
            className='w-[150px] px-4 py-2 border rounded bg-white '
            draggable  //draggable api html5
            onDragStart={(e) => handleDragStart(e, node)}  //draggable api html5
            onDragOver={(e) => handleDragOver(e)}  //draggable api html5
        >
            {node.name}
        </Box>
    )
}

export default SidebarNode;