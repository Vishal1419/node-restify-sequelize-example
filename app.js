const Restify = require('restify');
var sequelize = require('./config/db').getDbInstance();

var User = require('./models/users')(sequelize);

const index = require('./routes/index')(User);

var server = Restify.createServer({
    name: 'testServer',
    versions: ['1.0.0']
});

server.use(Restify.plugins.acceptParser(server.acceptable));
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());

server.get('/', index.get);
server.post('/', index.post);
server.put('/', index.put);
server.del('/', index.del);

server.listen(3000,function(err){
    console.log("Server Url : " + server.url);
});
