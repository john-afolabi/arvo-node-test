const server = require("./server");
const env = require("./config/env");

const port = env.port || 4000;

server.listen(port, () => {
	console.log(`\n Server listening on port ${port} \n`);
});
