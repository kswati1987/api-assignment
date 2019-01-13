const fs = require('fs');
const https = require('https');


let data = fs.readFileSync('./testsoap.xml', 'utf8', (err, data) => {
    if (err) throw err;
 return data;
 });

const options = {
    hostname: 'www.example.org',
    method: 'POST',
    headers: {
        'Content-Type': 'text/xml;charset=utf-8',
        'Content-Length': data.length
      }
}

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
 
    res.on('data', (d) => {
      console.log(d.toJSON())
    })
  })
 
  req.on('error', (error) => {
    console.error(error.toString())
  })
 
req.write(data)
req.end()