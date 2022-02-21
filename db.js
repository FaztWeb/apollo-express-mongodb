const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(process.env.MONGODB_URI || "mongodb://localhost/tasksdb");
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDb };
