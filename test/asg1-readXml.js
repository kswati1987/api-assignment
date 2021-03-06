var fs = require('fs'),
    parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

fs.readFile('test.xml', 'utf-8', function (err, data){
    if(err) console.log(err);
    
    console.log(data);
    
    parseString(data, function(err, result){
        if(err) console.log(err);
       
        console.log(result);
        
        var json = result;
        
        json.root.graph[0].node[0].company = "wiproltd";
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);
        
        fs.writeFile('updated-test.xml', xml, function(err, data){
            if (err) console.log(err);
            
            console.log("successfully updated text to new xml file");
        })
                  
    });
}); 