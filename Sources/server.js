const express = require('express');

let app = express();
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
});