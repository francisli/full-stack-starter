const express = require('express');

const router = express.Router();

const models = require('../../models');

router.get('/', async function (req, res) {
  const rows = await models.Skill.findAll();
  res.json(rows);
});

module.exports = router;
