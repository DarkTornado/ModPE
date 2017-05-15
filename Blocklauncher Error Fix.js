/*
Blocklauncher Error Fix
© 2017 Dark Tornado, All rights reserved.

<Fixed Functions>
entityAddedHook : Admin could be detected, but clients are not.
newLevel : Fixed, but parameter 'hasLevel' is not fixed.
selectLevelHook : Fixed.
Entity.getAll(); : Admin could be detected, but clients are not.
Server.getAllPlayers(); : Admin could be detected, but clients are not.
Server.getAllPlayerNames(); : Admin could be detected, but clients are not.
Level.getWorldName(); : Fixed.
Level.getWorldDir(); : Fixed.

<고친 함수들>
entityAddedHook : 서버장은 인식. 서버원은 아직 인식 X.
newLevel : 정상 작동. 단, hasLevel 매개변수 예외.
selectLevelHook : 정상 작동.
Entity.getAll(); : 서버장은 인식. 서버원은 아직 인식 X.
Server.getAllPlayers(); : 서버장은 인식. 서버원은 아직 인식 X.
Server.getAllPlayerNames(); : 서버장은 인식. 서버원은 아직 인식 X.
Level.getWorldName(); : 정상 작동.
Level.getWorldDir(); : 정상 작동.
*/

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;

var ticks = 0;

function modTick() {
    var ents = ScriptManager.allentities;
    var pe = Player.getEntity();
    var hasResult = false;
    var entCache = [];
    for (var n = 0; n < ents.size(); n++) {
        let e = ents.get(n);
        if (e == pe) {
            hasResult = true;
        }
        if (ticks < 100) break;
        if (Entity.getEntityTypeId(e) == 0) {
            var isAdded = false;
            for (var m = 0; m < entCache.length; m++) {
                if (entCache[m] == e) {
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) entCache.push(e);
        }
    }
    if (!hasResult) {
        //clientMessage("Admin is Detected : "+pe);
        ScriptManager.entityAddedCallback(java.lang.Long(pe));
    }
    new java.lang.Thread({
        run: function() {
            java.lang.Thread.sleep(500);
            var ents = ScriptManager.allentities;
            for (var n = 0; n < entCache.length; n++) {
                let e = entCache[n];
                let isRemoved = true;
                for (var m = 0; m < ents.size(); m++) {
                    if (ents.get(m) == e) {
                        isRemoved = false;
                        break;
                    }
                }
                if (!isRemoved) {
                    ents.remove(e);
                    //clientMessage("Entity Removing checking miss is Detected : "+e);
                    ScriptManager.callScriptMethod("entityRemovedHook", [e]);
                }
            }
        }
    }).start();
    ticks++;
}

function entityAddedHook(e) {
    if (Player.isPlayer(e) && ScriptManager.allplayers.size() == 1) {
        //clientMessage("Player is Detected ("+Player.getName(e)+", "+e +")");
        ScriptManager.callScriptMethod("selectLevelHook", []);
        //ScriptManager.selectLevelCallback(worldName, worldDir);
        new java.lang.Thread({
            run: function() {
                java.lang.Thread.sleep(100);
                var worldDir = ModPE.getWorldDir();
                var worldName = Level.getWorldNameByDir(worldDir);
                ScriptManager.worldName = worldName;
                ScriptManager.worldDir = worldDir;
                //clientMessage("World info. is loaded (Name : "+worldName+", Dir : "+worldDir+")");
                //ScriptManager.setLevelCallback(false, false);
                ScriptManager.callScriptMethod("newLevel", []);
            }
        }).start();
    }
}

function leaveGame() {
    ScriptManager.allentities.clear();
    ScriptManager.allplayers.clear();
}

ModPE.getWorldDir = function() {
    try {
        var mapData = [];
        var list = new java.io.File(sdcard + "/games/com.mojang/minecraftWorlds/").listFiles();
        mapData[0] = new java.io.File(list[0], "level.dat").lastModified();
        for (var n = 1; n < list.length; n++) {
            var cache = new java.io.File(list[n], "level.dat").lastModified();
            if (mapData[0] < cache) {
                mapData[0] = cache;
                mapData[1] = list[n];
            }
        }
        if (mapData[1] == null) return null;
        else return new java.io.File(mapData[1]).getName();
    } catch (e) {
        clientMessage(e);
    }
};

Level.getWorldNameByDir = function(worldDir) {
    try {
        var file = new java.io.File(sdcard + "/games/com.mojang/minecraftWorlds/" + worldDir + "/levelname.txt");
        if (!(file.exists())) return "null";
        var fis = new java.io.FileInputStream(file);
        var isr = new java.io.InputStreamReader(fis);
        var br = new java.io.BufferedReader(isr);
        var str = br.readLine();
        var line = "";
        while ((line = br.readLine()) != null) {
            str += "\n" + line;
        }
        fis.close();
        isr.close();
        br.close();
        return str;
    } catch (e) {
        clientMessage(e);
    }
};

