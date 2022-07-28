require("dotenv").config();
const randomId = require("random-id"),
    { MongoClient } = require("mongodb"),
    uri = "mongodb+srv://" + process.env.USUARIO + ":" + process.env.CONTRA + process.env.CLUSTER;

module.exports = async (req, res) => {
    await MongoClient.connect(uri, (err, client) => {   // connect to mongodb
        if(err) throw err;
        client.db("URLShort").collection("links").findOne({short: req.params.enlace}, (err, result) => {  // find link data
            if(err) throw err;
            if(result) res.redirect(result.enlace);    // redirect to link
            else res.redirect("/");            // redirect to index
        });
    });
};