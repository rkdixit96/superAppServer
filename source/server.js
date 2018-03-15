const Hapi = require('hapi');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: 9090,
  host: 'localhost',
});

console.log(Routes, 'ROUTES');
server.route(Routes);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw (err);
    }
    console.log(`Server started at ${server.info.uri}`);
  });
}

module.exports = server;
