const { MongoClient } = require("mongodb");

async function connectDB() {
	const uri = "mongodb://mongodb:27017";

	const client = new MongoClient(uri);

	try {
		// Connect to the MongoDB cluster
		await client.connect();
        console.log('database connected!!!')
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

module.exports = { connectDB };
