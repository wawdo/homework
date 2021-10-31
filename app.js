const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');

app.use(bodyParser());
 app.get('/weather', function(req, res){
  res.sendfile('weather.html');
});

const jsonObj = `{
          "Sofia": "25",
          "Varna": "30",
          "Plovdiv": "27",
          "Burgas": "33" 
     }`;
var weather = JSON.parse(jsonObj);

app.post('/getWeather', function (req, res) {
	res.send(weather[req.body.dropdown]);
});

app.get('/getCities', function (req, res) {
	res.send(weather);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})