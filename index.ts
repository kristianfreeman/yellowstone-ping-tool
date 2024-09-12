require('dotenv').config()
import Client from "@triton-one/yellowstone-grpc"

const url = process.env.YELLOWSTONE_URL

if (!url) {
	console.log("No YELLOWSTONE_URL env var set")
	process.exit(0)
}

console.log("connecting to: ", url);
const yellowstoneClient = new Client(url, undefined, {});

const unixTimestamp = Math.floor(Date.now());

console.log("starting up");

setInterval(() => {
	console.log(`\tsending ping to yellowstone`);
	yellowstoneClient.ping(unixTimestamp);
}, 1000 * 10);
