export default (markup, css) => {
    console.log("XJ:", markup === '');
    return 
        `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>MERN Chat</title>
            </head>
            <body>
                <div id="root">${markup}</div>
                <style id="jss-server-side">${css}</style>
                <script defer type="text/javascript" src="./dist/bundle.js"></script>
            </body>
        </html>`.trim();
}