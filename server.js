let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let exphbs = require('express-handlebars');

let app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

let routes = require('./routes/routes.js');
app.use('/',routes);

const port = 3000;
app.listen(port);
