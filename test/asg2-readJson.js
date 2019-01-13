'use strict';

const fs = require('fs');
var should = require("should");
var request = require("request");
var expect = require("chai").expect;

var parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

fs.readFile('test.json', (err, data) => {  
    if (err) throw err;
    let employee = JSON.parse(data);
    employee['name'] = 'WiproLtd';
    console.log(employee);

    console.log('This is after the read call');  
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(employee);
        
        fs.writeFile('new-edited-Jsontest.xml', xml, function(err, data){
            if (err) console.log(err);
            
            console.log("successfully written our json file details to Xml");
        })
});

