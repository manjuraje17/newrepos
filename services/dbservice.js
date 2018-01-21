var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://dbuser:dbpassword@ds111258.mlab.com:11258/projector2").then(function(client)){
    console.log("connected to mongodb");
    exports.database=client.db("projector2");
  });
}
