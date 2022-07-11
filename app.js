const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(process.env.PORT || 5000);

let chats = fs.readFileSync("chats.json", "utf8");
chats = JSON.parse(chats);


app.get("/", (req, res) => {
  res.render("home", {
    chats,
    chat: false,
    chat_id: "test",
  });
});

app.get("/rooms/:id", (req, res) => {
  const id = req.params.id;
  const chat = chats.find((item) => item.id === id).messeges;
  res.render("room", {
    chat,
    chats,
    chat_id: id,
  });
});
app.post("/rooms/:id", (req, res) => {
  const id = req.params.id;
  const chat = chats.find((item) => item.id === id);
  chat.messeges.push({
    name: req.body.name,
    message: req.body.message,
    time: req.body.time,
  });
  fs.writeFileSync("chats.json", JSON.stringify(chats))
  res.redirect(`/rooms/${id}`);
});

// app.get("/", (req, res) => {
//   res.render("test-page");
// });
