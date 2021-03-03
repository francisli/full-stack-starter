const express = require('express');

const router = express.Router();

router.get('/', async function (req, res) {
  res.json([
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' }
  ]);
});

module.exports = router;
