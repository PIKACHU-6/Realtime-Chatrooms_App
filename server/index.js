const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const router = require("./router");
const cors = require("cors");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./appMethods");

app.use(router);
app.use(cors);

io.on("connection", (socket) => {
  //   New user joined
  socket.on("join", (data, callback) => {
    let { name, room } = data;
    let { user, error } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    // Welcome message
    socket.emit("message", {
      user: "admin",
      msg: `Welcome to ${user.room} community ${user.name}`,
    });

    socket.join(user.room);

    // Notify other participants of new user
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      msg: `${user.name} has joined the chat`,
    });

    // Info of all users present in the room
    io.to(user.room).emit("currentUsers", {
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  // User sent message
  socket.on("sendMessage", (message, callback) => {
    let user = getUser(socket.id);

    io.to(user.room).emit("message", {
      user: user.name,
      msg: message,
    });

    callback();
  });

  //   User disconnected
  socket.on("disconnect", () => {
    // Remove user from datalog
    let user = removeUser(socket.id);

    if (user) {
      // Notify user leaving the room
      io.to(user.room).emit("message", {
        user: "admin",
        msg: `${user.name} has left the chatroom.`,
      });

      // Notify remaining users in the room
      io.to(user.room).emit("currentUsers", {
        users: getUsersInRoom(user.room),
      });
    }
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server runing on port ${port}`));
