import express from 'express';
import devBundle from './devBundle.js';
import template from './../template.js'

const app = express();
devBundle.compile(app);

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log("you got error")
    }
    console.info('Server started on port %s.', port)
});