const Restify = require('restify');
var sequelize = require('./config/db').getDbInstance();

var User = require('./models/users')(sequelize);

var server = Restify.createServer({
    name: 'testServer',
    versions: ['1.0.0']
});

server.use(Restify.plugins.acceptParser(server.acceptable));
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());

const index = require('./routes/index')(server, User);

server.listen(3000,function(err){
    console.log("Server Url : " + server.url);
});
