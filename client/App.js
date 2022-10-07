import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './styles/createEmotionCache';
import theme from './styles/theme';
import { BrowserRouter } from "react-router-dom";
import ClientRoutes from './ClientRoutes.jsx';
import io from 'socket.io-client';

const socket = io();
const cache = createEmotionCache();

const HelloWorld = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });
    
        socket.on('disconnect', () => {
            setIsConnected(false);
        });
    
        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });
    
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    useEffect(() => {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    
    return (
        <CacheProvider value={cache}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <ClientRoutes></ClientRoutes>
                </ThemeProvider>
            </BrowserRouter> 
        </CacheProvider>
    );
}

export default HelloWorld;