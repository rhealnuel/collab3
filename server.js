const express = require("express");
const app = express();
const port = 3000 || process.env.PORT
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res, next)=>{
  
})
app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});
