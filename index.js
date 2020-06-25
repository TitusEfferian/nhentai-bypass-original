const request = require('request');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    try {
        const source = req.query.source;
        console.log({
            request: req.query,
        });
        if(source.includes('nhentai.net')) {
            request.get(source).pipe(res);
        }
        res.end();
    } catch (err) {
        console.log({
            request: req.query,
            err,
        });
        res.end();
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
