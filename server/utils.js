var Chat;
var utils = {};

module.exports = function(_Chat) {
    Chat       = _Chat;
    Chat.utils = utils;
};

utils.log = function() {
    var args = Array.prototype.slice.call(arguments);
    var req;

    if (typeof args[0] === "object") {
        req = args[0];
        args.shift();
    }

    var date  = new Date().toISOString();
    var ip    = req.ip || "";

    if (ip) {
        args = [date, Chat.settings.env, "[" + ip + "]"].concat(args);
    } else {
        args = [date, Chat.settings.env].concat(args);
    }

    console.log.apply(console, args);
};
