const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// const mongoose = require("mongoose");
// const todoSchema = new mongoose.Schema({
//   todo: String,
// });
// async function main() {
//   mongoose
//     .connect(
//       "mongodb+srv://user-1:t9ZnSpFMqNG2j34u@cluster0.hsbvm.mongodb.net/?retryWrites=true&w=majority",
//       { useNewUrlParser: true, useUnifiedTopology: true }
//     )
//     .then(() => {
//       console.log("Connected to database!");
//     });
// }
// main()
//   .catch(() => console.log("Error connecting to database"))
//   .then(() => {
//     app.listen(3000);
//   });
// const Todo = mongoose.model("Todo", todoSchema);

// style in ./public/style.css
// script in ./public/script.js
app.use(express.static("public"));
app.listen(process.env.PORT || 5000);

const get_todos = (req, res) => {
  Todo.find({}, (err, todos) => {
    res.render("todo", { todos: todos });
  });
};

const post_todos = (req, res) => {
  const item = req.body.todo;
  const newTodo = new Todo({
    todo: item,
  });
  newTodo.save();
  res.redirect("/todo");
};

app.get("/todo", (req, res) => {
  res.render("todo");
});
app.post("/todo", post_todos);

app.get("/", (req, res) => {
  res.render("todo");
});
