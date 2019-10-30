const app = require('./app');
const { port } = require('./config');

app.listen({ port }, () => {
	console.log(`Resume Storage Server ready at http://localhost:${port}`);
})