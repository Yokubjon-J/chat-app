import React, {useState, useRef} from 'react';
import Paper from '@mui/material/Paper';
import TagIcon from '@mui/icons-material/Tag';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { v4 as uuidv4 } from 'uuid';
// import { SpeedDialIcon } from '@mui/material';
import ChannelName from './ChannelName';

function ChannelNameContainer({channelNames}) {
    // let click = () => {
    //     setNewName(myRef.current.innerHTML);
    // };
    return (
        channelNames.map((s, i) => {
            return (
                <div key={uuidv4()}>
                    <ChannelName name={s.name} />
                    {/*if you didn't create a separate container (⬆️) for channel name, editing the chan. name would be problematic*/}
                </div>
            )
        })
    )
}

export default ChannelNameContainer
