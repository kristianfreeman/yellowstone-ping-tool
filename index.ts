require('dotenv').config()
import Client from "@triton-one/yellowstone-grpc"

const timer = process.env.TIMER ? Number(process.env.TIMER) : 10
const url = process.env.YELLOWSTONE_URL

if (!url) {
	console.log("No YELLOWSTONE_URL env var set")
	process.exit(0)
}

console.log("connecting to: ", url);
const yellowstoneClient = new Client(url, undefined, {});

console.log("starting up");

setInterval(async () => {
	try {
		const height = await yellowstoneClient.getBlockHeight();
		console.log(`block height is ${height}`)
	} catch (err) {
		console.log(`couldn't retrieve block height`)
		console.debug(`something went wrong: ${err}`)
	}
}, timer * 1000);
