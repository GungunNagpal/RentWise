const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dns.resolveSrv(
  "_mongodb._tcp.rentwisecluster.gtvethv.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);