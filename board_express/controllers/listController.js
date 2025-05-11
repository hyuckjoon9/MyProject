var express = require('express');

exports.getList = (req, res) => {
  let testPosts = [
    {
      id: 1,
      title: '첫번째 글',
      content: '첫번째 내용',
    },
    {
      id: 2,
      title: '두번째 글',
      content: '두번째 내용',
    },
  ];
  res.render('list', { posts: testPosts });
};
