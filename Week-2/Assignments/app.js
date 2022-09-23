const { request, response } = require("express");
const express = require("express");

const app = express();
app.use(express.static(__dirname));

app.get("/", (request, response) => {
  response.send("Hello, My Server!");
});
app.get("/data", (request, response) => {
  let number = request.query.number;
  if (!number) {
    response.send("Lack of Parameter");
  } else if (isNaN(number)) {
    response.send("Wrong Parameter");
  } else {
    number = parseInt(number, 10);
    let result = ((1 + number) * number) / 2;
    response.send(`${result}`);
  }
});
app.listen(3000);
