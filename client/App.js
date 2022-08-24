import React from 'react';
import Container from '@mui/material/Container';
import TabsMenu from './TabsMenu.jsx';
import RoomOne from './RoomOne.jsx';
import { Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './styles/createEmotionCache';
import theme from './styles/theme';

const cache = createEmotionCache();

const HelloWorld = () => {
    if (typeof window !== 'undefined') {
        React.useEffect(() => {
            const jssStyles = document.getElementById('jss-server-side');
            if (jssStyles) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }, []);
    }
    
    return (
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<div>Hi! <Outlet/></div>}>
                            <Route path="profile" element={<p>stub 1</p>}></Route>
                            <Route path="rooms" element={<div>stub 2<Outlet/></div>}>
                                <Route path=":id" element={<RoomOne />} />
                            </Route>
                            <Route path="dms" element={<p>stub 3</p>}></Route>
                            <Route index element={<Container><TabsMenu/></Container>} />
                        </Route>
                        {/* <Route index element={<Container><TabsMenu/></Container>} /> */}
                    </Routes>
                </ThemeProvider>
            </CacheProvider>
    );
}

export default HelloWorld;