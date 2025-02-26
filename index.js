let express = require("Express");

let app = express();


app.get("/",(request, response)=> {
    response.send("Hello from the server!")
});

app.listen(16078);

console.log("Server runnning!");