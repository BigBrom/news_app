const app = require('express')();
const articles = [{title: 'test'}];

app.get('/', (req, res) => res.send('hello world'));