namespace SpriteKind {
    export const goomba = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
function goomba2 () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile14`)) {
        kaka = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f f f e e f f f f . . . 
            . . . . f 1 f e e f 1 f . . . . 
            . . . f e 1 1 f f 1 1 e f . . . 
            . f f e e 1 f e e f 1 e e f f . 
            f e e e e 1 f e e f 1 e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e 1 f f f f f f f f 1 e e f 
            . f e 1 e e e e e e e e 1 e f . 
            . . f f f f f f f f f f f f . . 
            . . . . f d d d d d d f . . . . 
            . . . e e d d d d d d e e . . . 
            . e e e e d d d d d d e e e e . 
            e e e e e e d d d d e e e e e e 
            e e e e e e . . . . e e e e e e 
            `, SpriteKind.goomba)
        tiles.placeOnTile(kaka, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            kaka.vx = 50
        } else {
            kaka.vx = -50
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vy == 0) {
        Mario.vy = -200
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    kaka.destroy()
})
let kaka: Sprite = null
let Mario: Sprite = null
tiles.setCurrentTilemap(tilemap`niveau1`)
info.setLife(3)
goomba()
Mario = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e d d f d . . . . . 
    . . . e d e d d d f d d d . . . 
    . . . e d e e d d d e d d d . . 
    . . . . e d d d d e e e e . . . 
    . . . . . d d d d d d d . . . . 
    . . . . 2 2 8 2 2 2 8 2 2 . . . 
    . . . 2 2 2 8 2 2 2 8 2 2 2 . . 
    . . 2 2 2 2 8 8 8 8 8 2 2 2 2 . 
    . . d d 2 8 5 8 8 8 5 8 2 d d . 
    . . d d d 8 8 8 8 8 8 8 d d d . 
    . . d d 8 8 8 8 8 8 8 8 8 d d . 
    . . . . 8 8 8 . . . 8 8 8 . . . 
    . . . f f f . . . . . f f f . . 
    . . f f f f . . . . . f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(Mario, 100, 0)
Mario.x = 24
Mario.y = 220
Mario.ay = 400
scene.cameraFollowSprite(Mario)
game.onUpdate(function () {
    for (let valeur of sprites.allOfKind(SpriteKind.goomba)) {
        if (kaka.isHittingTile(CollisionDirection.Left)) {
            kaka.vx = 50
        } else if (kaka.isHittingTile(CollisionDirection.Right)) {
            kaka.vx = -50
        }
    }
})
