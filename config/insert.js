require("dotenv").config();
const randomId = require("random-id"),
    { MongoClient } = require("mongodb"),
    uri = "mongodb+srv://" + process.env.USUARIO + ":" + process.env.CONTRA + process.env.CLUSTER;

module.exports = async (req, res) => {
    let shorted = randomId(6, "aA0");   // generate randomid 6 length with numbers, lowercase and uppercase letters
    await MongoClient.connect(uri, (err, client) => {   // connect to mongodb
        if(err) throw err;
        client.db("URLShort").collection("links").insertOne({enlace: req.body.enlace, short: shorted}, (err, result) => {  // insert new link
            if(err) throw err;
            res.render("index.html", {"enlace":shorted, "url" : req.protocol + '://' + req.get('host') + req.originalUrl} );  // redirect to index
        });
    });
};