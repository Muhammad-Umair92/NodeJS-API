const routes = require('./routes');

module.exports = function(app, db) {
    console.log(db, "index.js*************")
    routes(app, db);
}