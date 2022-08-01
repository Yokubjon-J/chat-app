import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TabPanel from './CustomTabPanel.jsx';

const TabsMenu = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        console.log("onch: ", newValue);
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
                Profile
            </TabPanel>
            <TabPanel value={value} index={1}>
                Rooms
            </TabPanel>
            <TabPanel value={value} index={2}>
                DMs
            </TabPanel>
        </Box>
    )
}

export default TabsMenu;