import React from 'react';
import Container from '@mui/material/Container';
import TabsMenu from './TabsMenu.jsx';
import {
    Routes,
    Route,
  } from "react-router-dom";

const HelloWorld = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="profile" element={<p>stub 1</p>}></Route>
                <Route path="rooms" element={<p>stub 2</p>}></Route>
                <Route path="dms" element={<p>stub 3</p>}></Route>
                <Route index element={<Container><TabsMenu/></Container>} />
            </Route>
        </Routes>
    );
}

export default HelloWorld;