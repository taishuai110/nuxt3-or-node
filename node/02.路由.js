const express = require('express');

const app = express();

const formidable = require('formidable');

const path = require('path');

// 创建路由
app.post('/home/123', (req, res) => {
    const form = new formidable.IncomingForm();

    form.uploadDir = './public/image';

    form.keepExtensions = true;
    form.encoding = 'utf-8';
    
    form.parse(req, (err, fields, files) => {
        console.log(files);
        let url = '/images/' + files.file[0].newFilename + '/' + files.file[0].originalFilename;
		res.send(url);
    })
    // res.send('发送home页面');
});

app.get('/', (req, res) => {
    console.log(req.query);
    console.log('有人访问');
    // res.send('我才是首页');
});

app.post('/login', (req, res) => {
    res.send('login');
})

// all匹配所有的方法 即不在意请求的方法，只看路径
app.all('/text', (req, res) => {
    console.log('text');
});

// * 路由, 即什么路径都能访问到这个方法中，也可以作为404响应页面
app.all('*', (req, res) => {
    // console.log(req.body);
    res.send('Not fount 404')
});

app.listen('5050', () => {
    console.log('启动中...');
})