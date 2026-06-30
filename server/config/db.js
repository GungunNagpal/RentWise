const dns = require("dns");

// Force Node to use Google's public DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("========== MONGODB ERROR ==========");
    console.error(error);
    console.error("===================================");
    process.exit(1);
  }
};

module.exports = connectDB;