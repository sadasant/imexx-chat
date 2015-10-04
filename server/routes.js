module.exports = function(Chat) {
    require("./controllers")(Chat);

    var controllers = Chat.controllers;

    Chat.exp.use(controllers.log);

    Chat.exp.use("/login",             controllers.login);
    Chat.exp.get("/logout",            controllers.logout);
    Chat.exp.put("/chat",              controllers.new_chat);
    Chat.exp.del("/chat",              controllers.del_chat);
    Chat.exp.use("/chats",             controllers.chatrooms);
    Chat.exp.use("/:chatroom",         controllers.chatroom);
    Chat.exp.put("/:chatroom/message", controllers.new_message);
    Chat.exp.use("/",                  controllers.login);

    Chat.exp.use(controllers.not_found);
};
