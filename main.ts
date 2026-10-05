player.onChat("kingsmace", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    GOLDEN_HELMET,
    1
    )
    mobs.execute(
    mobs.target(LOCAL_PLAYER),
    pos(0, 0, 0),
    "replaceitem entity @s slot.armor.head 0 golden_helmet"
    )
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 999999, 2)
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 999999, 2)
})
