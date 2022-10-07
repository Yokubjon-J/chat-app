import path from 'path'
import React from 'react';
import express from 'express';
import devBundle from './devBundle.js';
import template from './../template.js';
import Main from '../client/ClientRoutes.jsx';
import createEmotionCache from '../client/styles/createEmotionCache';
import theme from '../client/styles/theme';
import ReactDOMServer from 'react-dom/server';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { StaticRouter } from "react-router-dom/server";
import cors from 'cors';
// import io from "socket.io";
const { Server } = require('socket.io'); 

const app = express();
devBundle.compile(app);

function renderFullPage(html, css) {
    return template(html, css);
}

function handleRender(req, res) {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                    {/* <CssBaseline /> */}
                    <Main />
                </ThemeProvider>
            </CacheProvider>
        </StaticRouter>
    );

    // Grab the CSS from emotion
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);

    // Send the rendered page back to the client.
    return res.send(renderFullPage(html, emotionCss));
}

app.use(cors());
app.use('/dist', express.static(path.join(process.cwd(), 'dist')));
// app.use(handleRender);

app.get('*', (req, res) => {
    handleRender(req, res);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, function onStart(err) {
    if (err) {
        console.log("you got error");
    }
    console.info('Server started on port: ', port)
});

const io = new Server(server);
const socketServer = io.listen(server);
socketServer.on("connect", function (socket) {
    console.log('&&$$@@@@@@@@@@@@@@@@@@@@@@!connected!#########################$$&&');
    socket.on("incoming", data => {
        console.log("incoming: ", data);
    });
});