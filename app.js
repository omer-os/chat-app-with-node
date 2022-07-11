const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(process.env.PORT || 5000);

const chats = [
  {
    name: "Lily Ramirez",
    message: "Ju ia anks",
    time: "11:02",
    img: "https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    id: "cab54ac5-67c1-5bb7-85c6-ce8e78c5d5cc",
    messeges: [
      {
        name: "person",
        message: "Ju ia anks",
        time: "11:02",
      },
      {
        name: "me",
        message: "Ju ia anks",
        time: "11:02",
      },
    ],
    messeges: [
      {
        name: "person",
        message: "Ju ia anks",
        time: "11:02",
      },
      {
        name: "me",
        message: "Ju ia anks",
        time: "11:02",
      },
      {
        name: "me",
        message: "Ju ia anks",
        time: "11:02",
      },
      {
        name: "me",
        message: "Ju ia anks",
        time: "11:02",
      },
    ],
  },
  {
    name: "Harold Daniels",
    message: "Da ny orale orale orale orale orale orale lojhwor wen s",
    time: "05:02",
    img: "https://images.unsplash.com/photo-1657530007077-03b920b8bc12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    id: "4215d62c-adcf-5ec4-b2db-3eb1492f8d04",
    messeges: [
      {
        name: "person",
        message: "Ju ia anks",
        time: "11:02",
      },
      {
        name: "me",
        message: "Ju ia anks",
        time: "11:02",
      },
    ],
  },
  {
    name: "Sarah Strickland",
    message: "Jeff ry unnin gham",
    time: "02:02",
    img: "https://images.unsplash.com/photo-1657563495719-e3693698c9c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    id: "df7aa668-c020-5d15-96bb-1a47ff2d2ed8",
    messeges: [
      {
        name: "person",
        message: "Ju ia anks",
        time: "11:02",
      },
      {
        name: "me",
        message: "Ju ia anks",
        time: "11:02",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.render("home", {
    chats,
    chat: false,
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
  res.redirect(`/rooms/${id}`);
});





// app.get("/", (req, res) => {
//   res.render("test-page");
// });