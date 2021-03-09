# ModPE Script

© 2017-2021 Dark Tornado, All rights reserved.

### [Blocklauncher Error Fix.js](Blocklauncher%20Error%20Fix.js)
* ModPE 스크립트로 간섭할 수 있는 범위 내에서 [블록런처](https://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher) 자체의 오류들을 최대한 수정
* 해당 스크립트를 적용하는 것 만으로 적용된 모든 스크립트들의 일부 버그들이 수정됨
* It Fixes [BlockLauncher](https://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher)'s error as much as possible by ModPE Script.
#### 완전히 수정된 오류 / Completely Fixed
* 이벤트 리스너 `selectLevelHook`가 호출되지 않는 오류
* 일부 엔티티가 사라졌음에도 이벤트 리스너 `entityRemovedHook`가 호출되지 않는 오류
* `Level.getWorldName();`과 `Level.getWorldDir();`가 정상적으로 작동하지 않는 오류
* `selectLevelHook`, `Level.getWorldName();` and `Level.getWorldDir();` are not working.
* `entityRemovedHook` is not working even if entity was removed.
#### 일부만 수정된 오류 / Partially Fixed
* 이벤트 리스너 `newLevel`가 호출되지 않는 오류
  * `hasLevel` 매개변수 예외.
* 이벤트 리스너 `entityAddedHook`가 플레이어를 감지하지 못하는 오류
  * 서버장은 감지하도록 수정
* `Entity.getAll();`, `Server.getAllPlayers();`, `Server.getAllPlayerNames();`로 반환한 배열에 플레이어가 포함되어있지 않는 오류
  * 서버장은 목록에 포함하도록 수정
* `newLevel` is not working.
  * It was fixed, but parameter `hasLevel`'s value is not fixed.
* `entityAddedHook` cannot detect player.
  * It was fixed, but it only detects `Admin`.
* `Entity.getAll();`, `Server.getAllPlayers();`, `Server.getAllPlayerNames();` do not return player.
  * It was fixed, but they only contain `Admin`.

### [PineTree.js](PineTree.js)
* 막대기로 터치한 곳에 소나무 생성
* 명령어 `/pine [종류]`를 통해 생성할 소나무의 종류 선택 가능. 종류는 1~4 사이의 정수
* 명령어 `/pine off`를 통해 막대기로 블록을 터치해도 소나무가 생성되지 않도록 설정 가능
* Create a pine tree where you touched it with a stick.
* Select type of pine tree by command `/pine [type]`. Type is 1~4.
* Disable creating pine tree by command `/pine off`.

### [Player.getLookingPosition.js](Player.getLookingPosition.js)
* 플레이어가 바라보고 있는 블록의 좌표를 배열로 반환
