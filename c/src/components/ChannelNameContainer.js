import React from 'react';
import Paper from '@mui/material/Paper';
import TagIcon from '@mui/icons-material/Tag';
import { v4 as uuidv4 } from 'uuid';

function ChannelNameContainer({channelNames}) {
    return (
        channelNames.map((s, i) => {
            return (
                <div key={uuidv4()} style={{cursor:"pointer"}}>
                    <Paper sx={{
                        textAlign: 'left',
                        margin: "0 2px"
                    }}>
                        <div style={{display:"flex", }}> {/*flex helps align properly*/}
                            <TagIcon fontSize='medium'/>
                            <span>{s.name}</span>
                        </div>
                    </Paper>
                </div>
            )
        })
    )
}

export default ChannelNameContainer
