import { actionNode, logicalNode, timingNode } from '@/constent/sidebarData'
import { Box } from '@mui/material'
import SidebarNode from './SidebarNode'

const Sidebar = () => {
    return (
        <Box className=' h-full w-[250px] border bg-slate-100'>
            <Box className='flex flex-col gap-4 items-center p-4 select-none' >
                {actionNode.map((node) => <SidebarNode key={node.id} node={node} />)}
            </Box>
            <Box className='flex flex-col gap-4 items-center p-4 select-none' >
                {timingNode.map((node) => <SidebarNode key={node.id} node={node} />)}
            </Box>
            <Box className='flex flex-col gap-4 items-center p-4 select-none' >
                {logicalNode.map((node) => <SidebarNode key={node.id} node={node} />)}
            </Box>
        </Box>
    )
}

export default Sidebar