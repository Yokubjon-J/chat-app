import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './CustomTabPanel.jsx';
import CreateRoomDialog from './CreateRoomDialog.jsx';
import { Typography } from '@mui/material';
import Room from './Room.jsx';

const TabsMenu = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs onChange={handleChange} value={value}>
                <Tab label="Profile"/>
                <Tab label="Rooms"/>
                <Tab label="DMs"/>
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography>Profile</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box>
                    <CreateRoomDialog/>
                    <Room/>
                </Box>
                <Typography>Rooms</Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography>DMs</Typography>
            </TabPanel>
        </Box>
    )
}

export default TabsMenu;