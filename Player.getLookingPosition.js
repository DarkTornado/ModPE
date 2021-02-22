/*
 * int[] Player.getLookingPosition(int limit[, int[] blockIds]);
 * Get Position where player is looking.
 * limit: Distance limit.
 * blockIds: Blocks to be treated as empty spaces. Air if omitted.
 */
Player.getLookingPosition = function(limit, blockIds) {
    if (blockIds == undefined) blockIds = [0];
    var px, py, pz, yaw, sin, cos, tan, pcos;
    px = Player.getX();
    py = Player.getY();
    pz = Player.getZ();
    yaw = Math.floor(getYaw());
    pitch = Math.floor(getPitch());
    sin = -Math.sin(yaw / 180 * Math.PI);
    cos = Math.cos(yaw / 180 * Math.PI);
    tan = -Math.sin(pitch / 180 * Math.PI);
    pcos = Math.cos(pitch / 180 * Math.PI);
    for (var n = 0; n < limit; n++) {
        if (blockIds.indexOf(getTile(px + n * sin * pcos, py + n * tan, pz + n * cos * pcos)) == -1) { //Cannot use Array.prototype.includes(); method in BlockLaucher
            return [px + n * sin * pcos, py + n * tan, pz + n * cos * pcos];
        }
    }
    return null;
}


/* Example */
function useItem(x, y, z, i, b) {
    if (i == 280) {
        var pos = Player.getLookingPosition(50);
        if (pos == null) clientMessage("Destination is too far. Limit is 50 blocks.");
        else Entity.setPosition(Player.getEntity(), pos[0], pos[1] + 3, pos[2]);
    }
}

