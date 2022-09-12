import React from 'react';
import { styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from "react-router-dom";
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import RoomUsersListSidebar from './RoomUsersListSidebar.jsx';
import Box from '@mui/material/Box';

const RoomOne = () => {
    return (
        <Box>
            <RoomUsersListSidebar/>
            <Box></Box>
            <div style={{ padding: 16 }}>
                <WysiwygEditor placeholder='Enter text...' />
            </div>
        </Box>
    )
}

export default RoomOne;