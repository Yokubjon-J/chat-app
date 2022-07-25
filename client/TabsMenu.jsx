import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const TabsMenu = () => {
    return (
        <Box>
            <Tabs>
                <Tab label="Profile" value="profile" />
                <Tab label="Rooms" value="rooms" />
            </Tabs>
        </Box>
    )
}

export default TabsMenu;