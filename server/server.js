import express from 'express';
import devBundle from './devBundle.js'
const app = express();
devBundle.compile(app);

import template from './../template.js'
app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
});