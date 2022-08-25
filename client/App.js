import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './styles/createEmotionCache';
import theme from './styles/theme';
import { BrowserRouter } from "react-router-dom";
import ClientRoutes from './ClientRoutes.jsx';

const cache = createEmotionCache();

const HelloWorld = () => {
    React.useEffect(() => {
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