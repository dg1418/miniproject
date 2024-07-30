"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;
// 시니어의 변경사항
app.listen(PORT, () => {
  console.log("서버가동");
});
