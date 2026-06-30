const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.rentwisecluster.gtvethv.mongodb.net",
  (err, records) => {
    console.log(err);
    console.log(records);
  }
);