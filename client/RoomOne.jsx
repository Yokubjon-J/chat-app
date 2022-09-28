import React from 'react';
import { styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from "react-router-dom";
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import RoomUsersListSidebar from './RoomUsersListSidebar.jsx';
import Box from '@mui/material/Box';

const RoomOne = () => {
    return (
        <Box sx={{display: 'flex',}}>
            <RoomUsersListSidebar/>

            <Box sx={{display: 'block', width: 1, height: '100vh'}}> {/*Displayed always*/}
                <div style={{
                    padding: 16,
                    position: 'absolute',
                    bottom: 0,
                }}>
                    <WysiwygEditor placeholder='Enter text...' />
                </div>
            </Box>

            <Box sx={{
                    display: {
                        xs: 'none',
                        sm: 'inline',
                    },
                    maxWidth: 300,
            }}>
                Closable Info Bar
            </Box>
        </Box>
    )
}

export default RoomOne;