import React from 'react';
import Container from '@mui/material/Container';
import TabsMenu from './TabsMenu.jsx';
import RoomOne from './RoomOne.jsx';
import { Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './styles/createEmotionCache';

const cache = createEmotionCache();

const HelloWorld = () => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    return (
        <CacheProvider value={cache}>
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
        </CacheProvider>
    );
}

export default HelloWorld;