const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '홍길동',
        'birthday' : '961222',
        'gender' : '남자',
        'job' : '대학생',
      }, 
      {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '이상민',
        'birthday' : '960305',
        'gender' : '남자',
        'job' : '대학생',
      },
      {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '이수민',
        'birthday' : '921205',
        'gender' : '남자',
        'job' : '대학생',
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));