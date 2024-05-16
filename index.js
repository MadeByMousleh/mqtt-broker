// Import required libraries
const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;

// Start the MQTT broker
server.listen(port, () => {
  console.log(`MQTT broker started and listening on port ${port}`);
});

// Handle client connections
aedes.on('client', (client) => {
  console.log(`Client connected: ${client.id}`);
});

// Handle client disconnections
aedes.on('clientDisconnect', (client) => {
  console.log(`Client disconnected: ${client.id}`);
});

// Handle incoming messages
aedes.on('publish', (packet, client) => {
  console.log(`Message published to topic ${packet.topic}: ${packet.payload.toString()}`);
});
