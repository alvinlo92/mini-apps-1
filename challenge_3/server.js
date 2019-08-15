const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World'));

app.post('/create-account', (res, req) => {
  // console.log(res)
  // let name = req.body.name;
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))