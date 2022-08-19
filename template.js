export default ({markup, css}) => {
    console.log("xong taiji: ", markup, css);
    return `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>MERN Chat</title>
                <base href="http://localhost:3000/rooms/one" />
            </head>
            <body>
                <div id="root">${markup}</div>
                <style id="jss-server-side">${css}</style>
                <script type="text/javascript" src="./dist/bundle.js"></script>
            </body>
        </html>`
}