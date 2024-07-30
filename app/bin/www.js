"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;
// dev의 변경사항
//이것도 main에서 추가 하기
//메인의 새로운 기능

app.listen(PORT, () => {
  console.log("서버가동");
});
