const App = require('./app');

const app = (new App()).app; 

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
});