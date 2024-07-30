"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;
//수정된 부분확이 해보기
app.listen(PORT, () => {
  console.log("서버가동");
});
