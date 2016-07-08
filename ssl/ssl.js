var fs = require("fs");

module.exports = {
	cert: fs.readFileSync("./ssl/server.crt", "utf8"),
	key: fs.readFileSync("./ssl/key.pem", "utf8"),
	passphrase: "123456"
};
