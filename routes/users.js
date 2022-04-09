var express = require('express');
var router = express.Router();

const users = [
  {id: 0, username: "wedeycode", url: "wedeycode.com"},
  {id: 1, username: "rpc", url: "https://Rpc-With-Small-image-and-dnd-or-idle-status-by-Omit-Gaming.meflems1.repl.co"}
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json(users);
});

module.exports = router;
