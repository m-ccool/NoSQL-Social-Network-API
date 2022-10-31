const { default: mongoose } = require("mongoose");
const mongooe = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/social-network",
    {
        useNewUrlParser: true,
        useUnifiedTopolgy: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;