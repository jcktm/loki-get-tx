var request = require('request');

var params = {
  "txs_hashes": process.argv.slice(2),
  "decode_as_json": true,
};

request({
  url: "http://localhost:38151/gettransactions",
  method: "POST",
  json: true,
  body: params,
}, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success:");
    console.log(Object.keys(body));
    console.log(JSON.parse(body.txs_as_json[0]));
    console.log(JSON.parse(body.txs_as_json[0]).extra);
  }
});
