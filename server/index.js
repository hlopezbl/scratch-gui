require("express-async-errors");
const express = require("express");
const app = express();

// Pre-route middlewares
require("./middlewares/pre-route.middleware")(app);

app.use("/", require("./routes/"));

const PORT = process.env.PORT || 4000;

// Listen to server port
app.listen(PORT, async() => {
    require("./dbConnect.js");
    console.log(`:::> Server listening @ http://localhost:${PORT}`);
});

// On server error
app.on("error", (error) => {
    console.error(`<::: An error occurred on the server: \n ${error}`);
});