import { Box } from '@mui/material'
import Sidebar from '@/components/Sidebar/Sidebar'

const layout = ({ children }) => {
    return (
        <Box className='w-full h-svh flex'>
            <Sidebar/>
            <Box className='w-full'>
                {children}
            </Box>
        </Box>
    )
}

export default layout