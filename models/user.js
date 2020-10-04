const MongoClient = require('mongodb').MongoClient;

module.exports = {
	get: (query = {}) => {
		return new Promise((resolve, reject) => {
			connect().then((database) => {
				database.collection('users').findOne(query, (err, user) => {
					if (err) {
						reject(err);
					}
					resolve(user);
				});
			});
		});
	}
};

function connect() {
	return new Promise((resolve, reject) => {
		const url = 'mongodb://localhost:27017';
		MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
			if (err | client == undefined) {
				reject("Fehler beim verbinden");
			}
			const db = client.db('homeworkdb');
			resolve(db);
		});
	});
}