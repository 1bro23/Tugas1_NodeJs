let express = require("express");

let app = express();

var port = process.env.port || 8080;

let router = require("./DataSiswa");

app.use("/DataSiswa", router);

app.get("/", function(req,res){
  res.send("Selamat Datang Di Data Center Siswa Indonesia");
});

app.listen(port, function(){
  console.log("Server berjalan pada port :"+port);
});
