var express = require('express');

exports.getDetail = (req, res) => {
  var postId = req.params.id;
  res.render('detail.ejs', { id: postId });
};
