var express= require("express");
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.json());


app.use(require('./routes/Estudiantes'))

app.listen(app.get('port'), () => {
    console.log(`Server started on port`,app.get('port'));
});