const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const PORT = 9999;

app.use("/", express.static(dirname + "../../frontend/build"));

app.get("/uploads", express(dirname + "../../backend/uploads"), (req, resp) => {
  resp.status(200).send("ok");
});

// default option, a /form middleware-hez
app.use(fileUpload());

app.post("/upload", function (req, res) {
  let userFile;
  let uploadPath;

  let newWednesday = {
    uName: req.body.uName,
    uEmail: req.body.uEmail,
    pCode: req.body.pCode,
    uCity: req.body.uCity,
    uStreet: req.body.uStreet,
    uDoorNr: req.body.uDoorNr,
    uOther: req.body.uOther,
  };

  // console.log(newWednesday);

  // if (!req.files || Object.keys(req.files).length === 0) {
  //     res.status(400).send("No files were uploaded.");
  //     return;
  // }

  userFile = req.files.userFile;

  uploadPath = __dirname + "/uploads/" + req.body.userName;

  userFile.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(269).json({ newWednesday });
    res.end("\n");
  });
});

//
app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT);
});
