const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("Server is running");
});

app.get("/", function (request, response) {
  const currentDateTime = new Date();

  response.json({
    currentDateTime: currentDateTime,
  });
});
