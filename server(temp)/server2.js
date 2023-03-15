const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 使用 body-parser 中间件解析 POST 请求的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 处理 POST 请求
app.post("/login", (req, res) => {
  // 在这里获取 POST 请求发送的数据
  const name = req.body.name;
  const password = req.body.password;
    console.log(req);
  // 返回一个 JSON 数据
  res.json({
    flag: "success",
    user_id: 0,
    cookie: 123,
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log("服务器已启动");
});
