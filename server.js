
require("dotenv").config();

const app = require("./src/app");
const ConnectDB = require("./src/db/db");

async function startServer() {
    try {
        await ConnectDB();

        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });

    } catch (err) {
        console.log(err);
    }
}

startServer();
