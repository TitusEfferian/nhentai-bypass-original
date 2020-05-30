const request = require('request');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    const bucketId = req.query.bucketId;
    const nhenPage = req.query.nhenPage;
    request.get('https://i.nhentai.net/galleries/' + bucketId + '/' + nhenPage + '.jpg').pipe(res);
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`))