import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "My First Express App",
    message: "Hello World!",
    people: ["John", "Jane", "Bob", "Alice", "Eve"],
  });
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
