const https = require('https');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    let body = Buffer.alloc(0);
    https.get('https://i.nhentai.net/galleries/1608266/1.jpg', httpResponse => {
        httpResponse.on('data', data => {
            body = Buffer.concat([body, data]);
        })
        httpResponse.on('end', () => {
            res.write(body);
            res.end();
        })
    })
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`))