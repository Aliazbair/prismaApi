const express = require("express");
const { PrismaClient } = require("@prisma/client");
// init express
const app = express();

// init prisma client
const prisma = new PrismaClient();
app.use(express.json());

// setup route
// home page
// app.use("/", (req, res) => res.send("<h1>home page</h1>"));
app.use("api/users", require("./routes/user"));
app.use("api/tasks", require("./routes/tasks"));

// create get all user route
// app.get("/", async (req, res) => {
//   const users = await prisma.user.findMany();
//   return res.status(200).json({ users });
// });

// get single user
// app.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const user = await prisma.user.findUnique({ where: { id: Number(id) } });
//   res.json(user);
// });
// create post route
// app.post("/", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await prisma.user.create({
//     data: { username, password },
//   });
//   res.status(201).json({ message: "user added successfully", data: user });
// });
// create update route
// app.put("/:id", async (req, res) => {
//   const { username } = req.body;
//   const updateUser = await prisma.user.update({
//     where: {
//       id: Number(req.params.id),
//     },
//     data: {
//       username: username,
//     },
//   });
//   res.json(updateUser);
// });
// create delete route
// app.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   const delUser = await prisma.user.delete({
//     where: { id: Number(id) },
//   });
//   return res.json(delUser);
// });

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
