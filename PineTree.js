/*
소나무 생성 스크립트
© 2020 Dark Tornado, All rights reserved.
*/

var type = 0;
procCmd = (cmd) => {
  var Data = cmd.split(" ");
  if (Data[0] == "pine" && cmd != "pine") {
    if (Data[1] == "off") {
      type = 0;
      clientMessage("소나무 생성 비활성화");
    } else {
      type = Number(Data[1]);
      clientMessage(Data[1] + "번 소나무로 설정됨");
    }
  }
}

useItem = (x, y, z, i, b) => {
  if (i == 280 && type > 0) {
    makePineTree(x, y, z);
  }
}

makePineTree = (x, y, z) => {
  switch (type) {
    case 1:
      setTile(x - 5, y + 9, z - 1, 18, 1);
      setTile(x - 5, y + 9, z, 18, 1);
      setTile(x - 5, y + 9, z + 1, 18, 1);
      setTile(x - 4, y + 9, z - 2, 18, 1);
      setTile(x - 4, y + 9, z - 1, 18, 1);
      setTile(x - 4, y + 9, z, 18, 1);
      setTile(x - 4, y + 9, z + 1, 18, 1);
      setTile(x - 4, y + 9, z + 2, 18, 1);
      setTile(x - 4, y + 10, z - 1, 18, 1);
      setTile(x - 4, y + 10, z, 18, 1);
      setTile(x - 4, y + 10, z + 1, 18, 1);
      setTile(x - 3, y + 9, z - 2, 18, 1);
      setTile(x - 3, y + 9, z - 1, 18, 1);
      setTile(x - 3, y + 9, z, 17, 1);
      setTile(x - 3, y + 9, z + 1, 18, 1);
      setTile(x - 3, y + 9, z + 2, 18, 1);
      setTile(x - 3, y + 10, z - 1, 18, 1);
      setTile(x - 3, y + 10, z, 18, 1);
      setTile(x - 3, y + 10, z + 1, 18, 1);
      setTile(x - 3, y + 14, z - 1, 18, 1);
      setTile(x - 3, y + 14, z, 18, 1);
      setTile(x - 3, y + 14, z + 1, 18, 1);
      setTile(x - 2, y + 8, z, 17, 1);
      setTile(x - 2, y + 9, z - 2, 18, 1);
      setTile(x - 2, y + 9, z - 1, 18, 1);
      setTile(x - 2, y + 9, z, 18, 1);
      setTile(x - 2, y + 9, z + 1, 18, 1);
      setTile(x - 2, y + 9, z + 2, 18, 1);
      setTile(x - 2, y + 10, z - 1, 18, 1);
      setTile(x - 2, y + 10, z, 18, 1);
      setTile(x - 2, y + 10, z + 1, 18, 1);
      setTile(x - 2, y + 14, z - 2, 18, 1);
      setTile(x - 2, y + 14, z - 1, 18, 1);
      setTile(x - 2, y + 14, z, 18, 1);
      setTile(x - 2, y + 14, z + 1, 18, 1);
      setTile(x - 2, y + 14, z + 2, 18, 1);
      setTile(x - 2, y + 15, z, 18, 1);
      setTile(x - 1, y + 7, z, 17, 1);
      setTile(x - 1, y + 9, z - 1, 18, 1);
      setTile(x - 1, y + 9, z, 18, 1);
      setTile(x - 1, y + 9, z + 1, 18, 1);
      setTile(x - 1, y + 11, z - 1, 18, 1);
      setTile(x - 1, y + 11, z, 18, 1);
      setTile(x - 1, y + 11, z + 1, 18, 1);
      setTile(x - 1, y + 14, z - 3, 18, 1);
      setTile(x - 1, y + 14, z - 2, 18, 1);
      setTile(x - 1, y + 14, z - 1, 18, 1);
      setTile(x - 1, y + 14, z, 18, 1);
      setTile(x - 1, y + 14, z + 1, 18, 1);
      setTile(x - 1, y + 14, z + 2, 18, 1);
      setTile(x - 1, y + 15, z - 1, 18, 1);
      setTile(x - 1, y + 15, z, 18, 1);
      setTile(x - 1, y + 15, z + 1, 18, 1);
      setTile(x, y + 1, z, 17, 1);
      setTile(x, y + 2, z, 17, 1);
      setTile(x, y + 3, z, 17, 1);
      setTile(x, y + 4, z, 17, 1);
      setTile(x, y + 5, z, 17, 1);
      setTile(x, y + 6, z, 17, 1);
      setTile(x, y + 7, z, 17, 1);
      setTile(x, y + 8, z, 17, 1);
      setTile(x, y + 9, z, 17, 1);
      setTile(x, y + 10, z, 17, 1);
      setTile(x, y + 11, z - 2, 18, 1);
      setTile(x, y + 11, z - 1, 18, 1);
      setTile(x, y + 11, z, 17, 1);
      setTile(x, y + 11, z + 1, 18, 1);
      setTile(x, y + 11, z + 2, 18, 1);
      setTile(x, y + 12, z - 1, 18, 1);
      setTile(x, y + 12, z, 17, 1);
      setTile(x, y + 12, z + 1, 18, 1);
      setTile(x, y + 13, z, 17, 1);
      setTile(x, y + 14, z - 3, 18, 1);
      setTile(x, y + 14, z - 2, 18, 1);
      setTile(x, y + 14, z - 1, 18, 1);
      setTile(x, y + 14, z, 17, 1);
      setTile(x, y + 14, z + 1, 18, 1);
      setTile(x, y + 14, z + 2, 18, 1);
      setTile(x, y + 15, z - 2, 18, 1);
      setTile(x, y + 15, z - 1, 18, 1);
      setTile(x, y + 15, z, 18, 1);
      setTile(x, y + 15, z + 1, 18, 1);
      setTile(x, y + 15, z + 2, 18, 1);
      setTile(x + 1, y + 10, z, 17, 1);
      setTile(x + 1, y + 11, z - 2, 18, 1);
      setTile(x + 1, y + 11, z - 1, 18, 1);
      setTile(x + 1, y + 11, z, 18, 1);
      setTile(x + 1, y + 11, z + 1, 18, 1);
      setTile(x + 1, y + 11, z + 2, 18, 1);
      setTile(x + 1, y + 12, z - 1, 18, 1);
      setTile(x + 1, y + 12, z, 18, 1);
      setTile(x + 1, y + 12, z + 1, 18, 1);
      setTile(x + 1, y + 14, z - 3, 18, 1);
      setTile(x + 1, y + 14, z - 2, 18, 1);
      setTile(x + 1, y + 14, z - 1, 18, 1);
      setTile(x + 1, y + 14, z, 18, 1);
      setTile(x + 1, y + 14, z + 1, 18, 1);
      setTile(x + 1, y + 14, z + 2, 18, 1);
      setTile(x + 1, y + 15, z - 1, 18, 1);
      setTile(x + 1, y + 15, z, 18, 1);
      setTile(x + 1, y + 15, z + 1, 18, 1);
      setTile(x + 2, y + 11, z - 2, 18, 1);
      setTile(x + 2, y + 11, z - 1, 18, 1);
      setTile(x + 2, y + 11, z, 18, 1);
      setTile(x + 2, y + 11, z + 1, 18, 1);
      setTile(x + 2, y + 11, z + 2, 18, 1);
      setTile(x + 2, y + 12, z - 1, 18, 1);
      setTile(x + 2, y + 12, z, 18, 1);
      setTile(x + 2, y + 12, z + 1, 18, 1);
      setTile(x + 2, y + 14, z - 2, 18, 1);
      setTile(x + 2, y + 14, z - 1, 18, 1);
      setTile(x + 2, y + 14, z, 18, 1);
      setTile(x + 2, y + 14, z + 1, 18, 1);
      setTile(x + 2, y + 14, z + 2, 18, 1);
      setTile(x + 2, y + 15, z, 18, 1);
      setTile(x + 3, y + 11, z - 1, 18, 1);
      setTile(x + 3, y + 11, z, 18, 1);
      setTile(x + 3, y + 11, z + 1, 18, 1);
      setTile(x + 3, y + 14, z - 1, 18, 1);
      setTile(x + 3, y + 14, z, 18, 1);
      setTile(x + 3, y + 14, z + 1, 18, 1);
      setTile(x + 3, y + 14, z + 2, 18, 1);
      break;
    case 2:
      setTile(x - 3, y + 14, z - 1, 18, 1);
      setTile(x - 3, y + 14, z, 18, 1);
      setTile(x - 3, y + 14, z + 1, 18, 1);
      setTile(x - 3, y + 14, z + 2, 18, 1);
      setTile(x - 2, y + 10, z + 2, 18, 5);
      setTile(x - 2, y + 10, z + 3, 18, 1);
      setTile(x - 2, y + 11, z - 3, 18, 1);
      setTile(x - 2, y + 11, z - 2, 18, 1);
      setTile(x - 2, y + 11, z - 1, 18, 1);
      setTile(x - 2, y + 14, z - 2, 18, 1);
      setTile(x - 2, y + 14, z - 1, 18, 1);
      setTile(x - 2, y + 14, z, 18, 1);
      setTile(x - 2, y + 14, z + 1, 18, 1);
      setTile(x - 2, y + 14, z + 2, 18, 1);
      setTile(x - 2, y + 14, z + 3, 18, 1);
      setTile(x - 2, y + 15, z, 18, 1);
      setTile(x - 1, y + 10, z + 1, 18, 1);
      setTile(x - 1, y + 10, z + 2, 18, 1);
      setTile(x - 1, y + 10, z + 3, 18, 1);
      setTile(x - 1, y + 10, z + 4, 18, 1);
      setTile(x - 1, y + 10, z + 5, 18, 1);
      setTile(x - 1, y + 11, z - 4, 18, 1);
      setTile(x - 1, y + 11, z - 3, 18, 1);
      setTile(x - 1, y + 11, z - 2, 18, 1);
      setTile(x - 1, y + 11, z - 1, 18, 1);
      setTile(x - 1, y + 11, z, 18, 1);
      setTile(x - 1, y + 11, z + 2, 18, 1);
      setTile(x - 1, y + 11, z + 3, 18, 1);
      setTile(x - 1, y + 11, z + 4, 18, 1);
      setTile(x - 1, y + 12, z - 3, 18, 1);
      setTile(x - 1, y + 12, z - 2, 18, 1);
      setTile(x - 1, y + 12, z - 1, 18, 1);
      setTile(x - 1, y + 14, z - 3, 18, 1);
      setTile(x - 1, y + 14, z - 2, 18, 1);
      setTile(x - 1, y + 14, z - 1, 18, 1);
      setTile(x - 1, y + 14, z, 18, 1);
      setTile(x - 1, y + 14, z + 1, 18, 1);
      setTile(x - 1, y + 14, z + 2, 18, 1);
      setTile(x - 1, y + 14, z + 3, 18, 1);
      setTile(x - 1, y + 15, z - 1, 18, 1);
      setTile(x - 1, y + 15, z, 18, 1);
      setTile(x - 1, y + 15, z + 1, 18, 1);
      setTile(x, y + 1, z, 17, 1);
      setTile(x, y + 2, z, 17, 1);
      setTile(x, y + 3, z, 17, 1);
      setTile(x, y + 4, z, 17, 1);
      setTile(x, y + 5, z, 17, 1);
      setTile(x, y + 6, z, 17, 1);
      setTile(x, y + 7, z, 17, 1);
      setTile(x, y + 8, z, 17, 1);
      setTile(x, y + 8, z + 1, 17, 1);
      setTile(x, y + 9, z - 1, 17, 1);
      setTile(x, y + 9, z, 17, 1);
      setTile(x, y + 9, z + 2, 17, 1);
      setTile(x, y + 10, z - 2, 17, 1);
      setTile(x, y + 10, z, 17, 1);
      setTile(x, y + 10, z + 1, 18, 1);
      setTile(x, y + 10, z + 2, 18, 1);
      setTile(x, y + 10, z + 3, 17, 1);
      setTile(x, y + 10, z + 4, 18, 1);
      setTile(x, y + 10, z + 5, 18, 1);
      setTile(x, y + 11, z - 4, 18, 1);
      setTile(x, y + 11, z - 3, 18, 1);
      setTile(x, y + 11, z - 2, 18, 1);
      setTile(x, y + 11, z - 1, 18, 1);
      setTile(x, y + 11, z, 17, 1);
      setTile(x, y + 11, z + 2, 18, 1);
      setTile(x, y + 11, z + 3, 18, 1);
      setTile(x, y + 11, z + 4, 18, 1);
      setTile(x, y + 12, z - 3, 18, 1);
      setTile(x, y + 12, z - 2, 18, 1);
      setTile(x, y + 12, z - 1, 18, 1);
      setTile(x, y + 12, z, 17, 1);
      setTile(x, y + 13, z, 17, 1);
      setTile(x, y + 14, z - 3, 18, 1);
      setTile(x, y + 14, z - 2, 18, 1);
      setTile(x, y + 14, z - 1, 18, 1);
      setTile(x, y + 14, z, 17, 1);
      setTile(x, y + 14, z + 1, 18, 1);
      setTile(x, y + 14, z + 2, 18, 1);
      setTile(x, y + 14, z + 3, 18, 1);
      setTile(x, y + 15, z - 2, 18, 1);
      setTile(x, y + 15, z - 1, 18, 1);
      setTile(x, y + 15, z, 18, 1);
      setTile(x, y + 15, z + 1, 18, 1);
      setTile(x, y + 15, z + 2, 18, 1);
      setTile(x + 1, y + 10, z + 1, 18, 1);
      setTile(x + 1, y + 10, z + 2, 18, 1);
      setTile(x + 1, y + 10, z + 3, 18, 1);
      setTile(x + 1, y + 10, z + 4, 18, 1);
      setTile(x + 1, y + 10, z + 5, 18, 1);
      setTile(x + 1, y + 11, z - 4, 18, 1);
      setTile(x + 1, y + 11, z - 3, 18, 1);
      setTile(x + 1, y + 11, z - 2, 18, 1);
      setTile(x + 1, y + 11, z - 1, 18, 1);
      setTile(x + 1, y + 11, z, 18, 1);
      setTile(x + 1, y + 11, z + 2, 18, 1);
      setTile(x + 1, y + 11, z + 3, 18, 1);
      setTile(x + 1, y + 11, z + 4, 18, 1);
      setTile(x + 1, y + 12, z - 3, 18, 1);
      setTile(x + 1, y + 12, z - 2, 18, 1);
      setTile(x + 1, y + 12, z - 1, 18, 1);
      setTile(x + 1, y + 14, z - 3, 18, 1);
      setTile(x + 1, y + 14, z - 2, 18, 1);
      setTile(x + 1, y + 14, z - 1, 18, 1);
      setTile(x + 1, y + 14, z, 18, 1);
      setTile(x + 1, y + 14, z + 1, 18, 1);
      setTile(x + 1, y + 14, z + 2, 18, 1);
      setTile(x + 1, y + 14, z + 3, 18, 1);
      setTile(x + 1, y + 15, z - 1, 18, 1);
      setTile(x + 1, y + 15, z, 18, 1);
      setTile(x + 1, y + 15, z + 1, 18, 1);
      setTile(x + 2, y + 10, z + 2, 18, 1);
      setTile(x + 2, y + 10, z + 3, 18, 1);
      setTile(x + 2, y + 10, z + 4, 18, 1);
      setTile(x + 2, y + 11, z - 3, 18, 1);
      setTile(x + 2, y + 11, z - 2, 18, 1);
      setTile(x + 2, y + 11, z - 1, 18, 1);
      setTile(x + 2, y + 14, z - 3, 18, 1);
      setTile(x + 2, y + 14, z - 2, 18, 1);
      setTile(x + 2, y + 14, z - 1, 18, 1);
      setTile(x + 2, y + 14, z, 18, 1);
      setTile(x + 2, y + 14, z + 1, 18, 1);
      setTile(x + 2, y + 14, z + 2, 18, 1);
      setTile(x + 2, y + 14, z + 3, 18, 1);
      setTile(x + 2, y + 15, z, 18, 1);
      setTile(x + 3, y + 14, z - 2, 18, 1);
      setTile(x + 3, y + 14, z - 1, 18, 1);
      setTile(x + 3, y + 14, z, 18, 1);
      setTile(x + 3, y + 14, z + 1, 18, 1);
      setTile(x + 3, y + 14, z + 2, 18, 1);
      break;
    case 3:
      setTile(x - 3, y + 13, z - 1, 18, 1);
      setTile(x - 3, y + 13, z, 18, 1);
      setTile(x - 3, y + 13, z + 1, 18, 1);
      setTile(x - 3, y + 14, z - 1, 18, 1);
      setTile(x - 3, y + 14, z, 18, 1);
      setTile(x - 3, y + 14, z + 1, 18, 1);
      setTile(x - 3, y + 14, z + 2, 18, 1);
      setTile(x - 2, y + 8, z - 2, 18, 1);
      setTile(x - 2, y + 8, z - 1, 18, 1);
      setTile(x - 2, y + 8, z, 18, 1);
      setTile(x - 2, y + 13, z - 2, 18, 1);
      setTile(x - 2, y + 13, z - 1, 18, 1);
      setTile(x - 2, y + 13, z, 18, 1);
      setTile(x - 2, y + 13, z + 1, 18, 1);
      setTile(x - 2, y + 13, z + 2, 18, 1);
      setTile(x - 2, y + 14, z - 2, 18, 1);
      setTile(x - 2, y + 14, z - 1, 18, 1);
      setTile(x - 2, y + 14, z, 18, 1);
      setTile(x - 2, y + 14, z + 1, 18, 1);
      setTile(x - 2, y + 14, z + 2, 18, 1);
      setTile(x - 2, y + 14, z + 3, 18, 1);
      setTile(x - 2, y + 15, z + 1, 18, 1);
      setTile(x - 1, y + 8, z - 3, 18, 1);
      setTile(x - 1, y + 8, z - 2, 18, 1);
      setTile(x - 1, y + 8, z - 1, 18, 1);
      setTile(x - 1, y + 8, z, 18, 1);
      setTile(x - 1, y + 8, z + 1, 18, 1);
      setTile(x - 1, y + 9, z - 2, 18, 1);
      setTile(x - 1, y + 9, z - 1, 18, 1);
      setTile(x - 1, y + 9, z, 18, 1);
      setTile(x - 1, y + 13, z - 2, 18, 1);
      setTile(x - 1, y + 13, z - 1, 18, 1);
      setTile(x - 1, y + 13, z, 17, 1);
      setTile(x - 1, y + 13, z + 1, 18, 1);
      setTile(x - 1, y + 13, z + 2, 18, 1);
      setTile(x - 1, y + 14, z - 2, 18, 1);
      setTile(x - 1, y + 14, z - 1, 18, 1);
      setTile(x - 1, y + 14, z, 18, 1);
      setTile(x - 1, y + 14, z + 1, 18, 1);
      setTile(x - 1, y + 14, z + 2, 18, 1);
      setTile(x - 1, y + 14, z + 3, 18, 1);
      setTile(x - 1, y + 14, z + 4, 18, 1);
      setTile(x - 1, y + 15, z, 18, 1);
      setTile(x - 1, y + 15, z + 1, 18, 1);
      setTile(x - 1, y + 15, z + 2, 18, 1);
      setTile(x, y + 1, z, 17, 1);
      setTile(x, y + 2, z, 17, 1);
      setTile(x, y + 3, z, 17, 1);
      setTile(x, y + 4, z, 17, 1);
      setTile(x, y + 5, z, 17, 1);
      setTile(x, y + 6, z, 17, 1);
      setTile(x, y + 7, z - 1, 17, 1);
      setTile(x, y + 7, z, 17, 1);
      setTile(x, y + 8, z - 3, 18, 1);
      setTile(x, y + 8, z - 2, 18, 1);
      setTile(x, y + 8, z - 1, 18, 1);
      setTile(x, y + 8, z, 17, 1);
      setTile(x, y + 8, z + 1, 18, 1);
      setTile(x, y + 9, z - 2, 18, 1);
      setTile(x, y + 9, z - 1, 18, 1);
      setTile(x, y + 9, z, 17, 1);
      setTile(x, y + 10, z, 17, 1);
      setTile(x, y + 11, z - 1, 18, 1);
      setTile(x, y + 11, z, 17, 1);
      setTile(x, y + 11, z + 1, 18, 1);
      setTile(x, y + 12, z, 17, 1);
      setTile(x, y + 13, z - 2, 18, 1);
      setTile(x, y + 13, z - 1, 18, 1);
      setTile(x, y + 13, z, 17, 1);
      setTile(x, y + 13, z + 1, 18, 1);
      setTile(x, y + 13, z + 2, 18, 1);
      setTile(x, y + 14, z - 2, 18, 1);
      setTile(x, y + 14, z - 1, 18, 1);
      setTile(x, y + 14, z, 18, 1);
      setTile(x, y + 14, z + 1, 17, 1);
      setTile(x, y + 14, z + 2, 18, 1);
      setTile(x, y + 14, z + 3, 18, 1);
      setTile(x, y + 14, z + 4, 18, 1);
      setTile(x, y + 15, z - 1, 18, 1);
      setTile(x, y + 15, z, 18, 1);
      setTile(x, y + 15, z + 1, 18, 1);
      setTile(x, y + 15, z + 2, 18, 1);
      setTile(x, y + 15, z + 3, 18, 1);
      setTile(x + 1, y + 8, z - 3, 18, 1);
      setTile(x + 1, y + 8, z - 2, 18, 1);
      setTile(x + 1, y + 8, z - 1, 18, 1);
      setTile(x + 1, y + 8, z, 18, 1);
      setTile(x + 1, y + 8, z + 1, 18, 1);
      setTile(x + 1, y + 9, z - 2, 18, 1);
      setTile(x + 1, y + 9, z - 1, 18, 1);
      setTile(x + 1, y + 9, z, 17, 1);
      setTile(x + 1, y + 11, z - 2, 18, 1);
      setTile(x + 1, y + 11, z - 1, 18, 1);
      setTile(x + 1, y + 11, z, 18, 1);
      setTile(x + 1, y + 11, z + 1, 18, 1);
      setTile(x + 1, y + 11, z + 2, 18, 1);
      setTile(x + 1, y + 12, z - 1, 18, 1);
      setTile(x + 1, y + 12, z, 18, 1);
      setTile(x + 1, y + 12, z + 1, 18, 1);
      setTile(x + 1, y + 13, z - 1, 18, 1);
      setTile(x + 1, y + 13, z, 18, 1);
      setTile(x + 1, y + 13, z + 1, 18, 1);
      setTile(x + 1, y + 14, z - 2, 18, 1);
      setTile(x + 1, y + 14, z - 1, 18, 1);
      setTile(x + 1, y + 14, z, 18, 1);
      setTile(x + 1, y + 14, z + 1, 18, 1);
      setTile(x + 1, y + 14, z + 2, 18, 1);
      setTile(x + 1, y + 14, z + 3, 18, 1);
      setTile(x + 1, y + 14, z + 4, 18, 1);
      setTile(x + 1, y + 15, z, 18, 1);
      setTile(x + 1, y + 15, z + 1, 18, 1);
      setTile(x + 1, y + 15, z + 2, 18, 1);
      setTile(x + 2, y + 8, z - 2, 18, 1);
      setTile(x + 2, y + 8, z - 1, 18, 1);
      setTile(x + 2, y + 8, z, 18, 1);
      setTile(x + 2, y + 10, z, 17, 1);
      setTile(x + 2, y + 11, z - 2, 18, 1);
      setTile(x + 2, y + 11, z - 1, 18, 1);
      setTile(x + 2, y + 11, z, 18, 1);
      setTile(x + 2, y + 11, z + 1, 18, 1);
      setTile(x + 2, y + 11, z + 2, 18, 1);
      setTile(x + 2, y + 12, z - 1, 18, 1);
      setTile(x + 2, y + 12, z, 18, 1);
      setTile(x + 2, y + 12, z + 1, 18, 1);
      setTile(x + 2, y + 14, z - 1, 18, 1);
      setTile(x + 2, y + 14, z, 18, 1);
      setTile(x + 2, y + 14, z + 1, 18, 1);
      setTile(x + 2, y + 14, z + 2, 18, 1);
      setTile(x + 2, y + 14, z + 3, 18, 1);
      setTile(x + 2, y + 15, z + 1, 18, 1);
      setTile(x + 3, y + 11, z - 2, 18, 1);
      setTile(x + 3, y + 11, z - 1, 18, 1);
      setTile(x + 3, y + 11, z, 18, 1);
      setTile(x + 3, y + 11, z + 1, 18, 1);
      setTile(x + 3, y + 11, z + 2, 18, 1);
      setTile(x + 3, y + 12, z - 1, 18, 1);
      setTile(x + 3, y + 12, z, 18, 1);
      setTile(x + 3, y + 12, z + 1, 18, 1);
      setTile(x + 3, y + 14, z, 18, 1);
      setTile(x + 3, y + 14, z + 1, 18, 1);
      setTile(x + 3, y + 14, z + 2, 18, 1);
      setTile(x + 4, y + 11, z - 1, 18, 1);
      setTile(x + 4, y + 11, z, 18, 1);
      setTile(x + 4, y + 11, z + 1, 18, 1);
      break;
    case 4:
      setTile(x - 3, y + 7, z, 18, 1);
      setTile(x - 3, y + 7, z + 1, 18, 1);
      setTile(x - 3, y + 12, z - 4, 18, 1);
      setTile(x - 3, y + 12, z - 3, 18, 1);
      setTile(x - 3, y + 12, z - 2, 18, 1);
      setTile(x - 2, y + 7, z - 2, 18, 1);
      setTile(x - 2, y + 7, z - 1, 18, 1);
      setTile(x - 2, y + 7, z, 18, 1);
      setTile(x - 2, y + 7, z + 1, 18, 1);
      setTile(x - 2, y + 7, z + 2, 18, 1);
      setTile(x - 2, y + 8, z - 1, 18, 1);
      setTile(x - 2, y + 8, z, 18, 1);
      setTile(x - 2, y + 8, z + 1, 18, 1);
      setTile(x - 2, y + 10, z + 3, 18, 1);
      setTile(x - 2, y + 10, z + 4, 18, 1);
      setTile(x - 2, y + 12, z - 5, 18, 1);
      setTile(x - 2, y + 12, z - 4, 18, 1);
      setTile(x - 2, y + 12, z - 3, 18, 1);
      setTile(x - 2, y + 12, z - 2, 18, 1);
      setTile(x - 2, y + 12, z - 1, 18, 1);
      setTile(x - 2, y + 13, z - 3, 18, 1);
      setTile(x - 1, y + 6, z, 17, 1);
      setTile(x - 1, y + 7, z - 2, 18, 1);
      setTile(x - 1, y + 7, z - 1, 18, 1);
      setTile(x - 1, y + 7, z, 18, 1);
      setTile(x - 1, y + 7, z + 1, 18, 1);
      setTile(x - 1, y + 7, z + 2, 18, 1);
      setTile(x - 1, y + 8, z - 1, 18, 1);
      setTile(x - 1, y + 8, z, 18, 1);
      setTile(x - 1, y + 8, z + 1, 18, 1);
      setTile(x - 1, y + 10, z + 1, 18, 1);
      setTile(x - 1, y + 10, z + 2, 18, 1);
      setTile(x - 1, y + 10, z + 3, 18, 1);
      setTile(x - 1, y + 10, z + 4, 18, 1);
      setTile(x - 1, y + 10, z + 5, 18, 1);
      setTile(x - 1, y + 11, z + 2, 18, 1);
      setTile(x - 1, y + 11, z + 3, 18, 1);
      setTile(x - 1, y + 11, z + 4, 18, 1);
      setTile(x - 1, y + 12, z - 6, 18, 1);
      setTile(x - 1, y + 12, z - 5, 18, 1);
      setTile(x - 1, y + 12, z - 4, 18, 1);
      setTile(x - 1, y + 12, z - 3, 18, 1);
      setTile(x - 1, y + 12, z - 2, 18, 1);
      setTile(x - 1, y + 12, z - 1, 18, 1);
      setTile(x - 1, y + 12, z, 18, 1);
      setTile(x - 1, y + 13, z - 4, 18, 1);
      setTile(x - 1, y + 13, z - 3, 18, 1);
      setTile(x - 1, y + 13, z - 2, 18, 1);
      setTile(x, y + 1, z, 17, 1);
      setTile(x, y + 2, z, 17, 1);
      setTile(x, y + 3, z, 17, 1);
      setTile(x, y + 4, z, 17, 1);
      setTile(x, y + 5, z, 17, 1);
      setTile(x, y + 6, z, 17, 1);
      setTile(x, y + 7, z - 2, 18, 1);
      setTile(x, y + 7, z - 1, 18, 1);
      setTile(x, y + 7, z, 17, 1);
      setTile(x, y + 7, z + 1, 18, 1);
      setTile(x, y + 7, z + 2, 18, 1);
      setTile(x, y + 8, z - 1, 18, 1);
      setTile(x, y + 8, z, 17, 1);
      setTile(x, y + 8, z + 1, 17, 1);
      setTile(x, y + 9, z - 1, 17, 1);
      setTile(x, y + 9, z + 2, 17, 1);
      setTile(x, y + 10, z - 2, 17, 1);
      setTile(x, y + 10, z + 1, 18, 1);
      setTile(x, y + 10, z + 2, 18, 1);
      setTile(x, y + 10, z + 3, 17, 1);
      setTile(x, y + 10, z + 4, 18, 1);
      setTile(x, y + 10, z + 5, 18, 1);
      setTile(x, y + 11, z - 3, 17, 1);
      setTile(x, y + 11, z + 2, 18, 1);
      setTile(x, y + 11, z + 3, 18, 1);
      setTile(x, y + 11, z + 4, 18, 1);
      setTile(x, y + 12, z - 6, 18, 1);
      setTile(x, y + 12, z - 5, 18, 1);
      setTile(x, y + 12, z - 4, 18, 1);
      setTile(x, y + 12, z - 3, 17, 1);
      setTile(x, y + 12, z - 2, 18, 1);
      setTile(x, y + 12, z - 1, 18, 1);
      setTile(x, y + 12, z, 18, 1);
      setTile(x, y + 13, z - 5, 18, 1);
      setTile(x, y + 13, z - 4, 18, 1);
      setTile(x, y + 13, z - 3, 18, 1);
      setTile(x, y + 13, z - 2, 18, 1);
      setTile(x, y + 13, z - 1, 18, 1);
      setTile(x + 1, y + 7, z - 1, 18, 1);
      setTile(x + 1, y + 7, z, 18, 1);
      setTile(x + 1, y + 7, z + 1, 18, 1);
      setTile(x + 1, y + 10, z + 1, 18, 1);
      setTile(x + 1, y + 10, z + 2, 18, 1);
      setTile(x + 1, y + 10, z + 3, 18, 1);
      setTile(x + 1, y + 10, z + 4, 18, 1);
      setTile(x + 1, y + 10, z + 5, 18, 1);
      setTile(x + 1, y + 11, z + 2, 18, 1);
      setTile(x + 1, y + 11, z + 3, 18, 1);
      setTile(x + 1, y + 11, z + 4, 18, 1);
      setTile(x + 1, y + 12, z - 6, 18, 1);
      setTile(x + 1, y + 12, z - 5, 18, 1);
      setTile(x + 1, y + 12, z - 4, 18, 1);
      setTile(x + 1, y + 12, z - 3, 18, 1);
      setTile(x + 1, y + 12, z - 2, 18, 1);
      setTile(x + 1, y + 12, z - 1, 18, 1);
      setTile(x + 1, y + 12, z, 18, 1);
      setTile(x + 1, y + 13, z - 4, 18, 1);
      setTile(x + 1, y + 13, z - 3, 18, 1);
      setTile(x + 1, y + 13, z - 2, 18, 1);
      setTile(x + 2, y + 10, z + 2, 18, 1);
      setTile(x + 2, y + 10, z + 3, 18, 1);
      setTile(x + 2, y + 10, z + 4, 18, 1);
      setTile(x + 2, y + 12, z - 5, 18, 1);
      setTile(x + 2, y + 12, z - 4, 18, 1);
      setTile(x + 2, y + 12, z - 3, 18, 1);
      setTile(x + 2, y + 12, z - 2, 18, 1);
      setTile(x + 2, y + 12, z - 1, 18, 1);
      setTile(x + 2, y + 13, z - 3, 18, 1);
      setTile(x + 3, y + 12, z - 4, 18, 1);
      setTile(x + 3, y + 12, z - 3, 18, 1);
      setTile(x + 3, y + 12, z - 2, 18, 1);
      break;
  }
}

