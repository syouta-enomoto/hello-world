const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render('test.ejs');
});

const server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});
