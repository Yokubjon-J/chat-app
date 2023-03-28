import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react';
import { styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from "react-router-dom";
// import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import { BoldExtension, CalloutExtension, ItalicExtension, ParagraphExtension, HistoryExtension } from 'remirror/extensions';
import { Remirror, ThemeProvider, useRemirror, useRemirrorContext, EditorComponent } from '@remirror/react';
import RoomUsersListSidebar from './RoomUsersListSidebar.jsx';
import Box from '@mui/material/Box';
import 'remirror/styles/all.css';


const RoomOne = () => {
    const Menu = () => <button onClick={() => alert('TBD')}>B</button>;
    
    const { manager, state, onChange } = useRemirror({
        extensions: () => [
            new BoldExtension(), new ItalicExtension(),
            new ParagraphExtension, new HistoryExtension,
            new CalloutExtension({ defaultType: 'warn' }),
        ],
        content: '<p>Type something...<p>',
        stringHandler: 'html',
        selection: 'start',
    });

    const ImperativeHandle = forwardRef((_, ref) => {
        const { setContent } = useRemirrorContext({
          autoUpdate: true,
        });
    
        // Expose content handling to outside
        useImperativeHandle(ref, () => ({ setContent }));
    
        return <></>;
    });
    
    const editorRef = useRef(null);
    
    return (
        <Box sx={{display: 'flex',}}>
            <RoomUsersListSidebar/>

            <Box sx={{display: 'block', width: 1, height: '100vh'}}> {/*Displayed always*/}
                <Box style={{
                    padding: 16,
                    position: 'absolute',
                    bottom: 0,
                }}>
                    <button
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => editorRef.current.setContent('DOC')}
                    >
                        Replace content
                    </button>
                    {/* <WysiwygEditor placeholder='Enter text...' /> */}

                    <ThemeProvider>
                        <div className='remirror-theme'>
                        <Remirror manager={manager} state={state} onChange={onChange}>
                            <ImperativeHandle ref={editorRef} />
                            <EditorComponent />
                            <Menu />
                        </Remirror>
                        </div>
                    </ThemeProvider>
                </Box>
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