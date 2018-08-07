const express     = require ('express');
const MongoClient = require ('mongodb').MongoClient;
const bodyParser  = require ('body-parser')
const db          = require ('./config/db')

const app         = express();

const port        = process.env.port || 8000;

app.get("/", function(req, res) {
    res.send("welcome to nodeJS App")
})

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err)
    require ('./app/routes')(app, database)
    app.listen(port, () => {
    console.log("we are live on " + port)
    })
})