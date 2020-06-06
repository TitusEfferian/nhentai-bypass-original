const request = require('request');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    try {
        const source = req.query.source;
        request.get(source).pipe(res);
    } catch (err) {
        res.send(`<h3>error @catch ${JSON.stringify(err)}</h3>`)
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`))