const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('client'))

app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('hello world')
});

const jsonToCsvConverter = (json) => {
  json = json.slice(0, -1);
  let jsonObj = JSON.parse(json);
  let csv = '';
  
  for (var key in jsonObj) {
    if (key !== 'children') {
      csv += key + ',';
    }
  }
  return csv
}

app.post('/upload_json', (req, res) => {
  const jsonText = req.body.json_data

  let csvText = jsonToCsvConverter(jsonText);

  // res.render('localhost:3000');
  res.end(csvText)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))