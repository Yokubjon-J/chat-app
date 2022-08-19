import React from 'react';
import express from 'express';
import devBundle from './devBundle.js';
import template from './../template.js';
import App from '../client/App.js';
import createEmotionCache from '../client/styles/createEmotionCache';
import theme from '../client/styles/theme';
import ReactDOMServer from 'react-dom/server';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';

const app = express();
devBundle.compile(app);

function renderFullPage(html, css) {
    return template({html, css});
}

function handleRender(req, res) {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                <App />
            </ThemeProvider>
        </CacheProvider>,
    );

    // Grab the CSS from emotion
    const emotionChunks = extractCriticalToChunks(html);
    const emotionCss = constructStyleTagsFromChunks(emotionChunks);

    // Send the rendered page back to the client.
    res.send(renderFullPage(html, emotionCss));
}

app.use(handleRender);

// app.get('*', (req, res) => {
//     res.status(200).send(template());
// });

const port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
    if (err) {
        console.log("you got error");
    }
    console.info('Server started on port: ', port)
});