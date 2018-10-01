var express = require("express");
var app = express();


var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
    // place code for your default task here
    done();
}

app.use('/ani/:id', function(req, res, next) {
    if (req.params.id == "aniruddh") {
        next();
    } else {
        res.send("ACCESS DENIED");
    }
});

app.get('/', function(request, response) {
    response.send("hello");
});


app.get('/ani/:id', function(request, response) {
    response.send("Welcome Master");
});

app.get('/vivek', function(request, response) {
    response.send("aniruddh");
});

app.get('/aani/vivek', function(request, response) {
    response.send("AV");
});

app.listen(1111, '0.0.0.0', function() {
    console.log("Server Started");
});
