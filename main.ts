namespace SpriteKind {
    export const goomba = SpriteKind.create()
}
function enemy_1 () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile4`)) {
        Goomba = sprites.create(img`
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
        tiles.placeOnTile(Goomba, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            Goomba.vx = 50
        } else {
            Goomba.vx = -50
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vy == 0) {
        Mario.vy = -200
    }
})
let Goomba: Sprite = null
let Mario: Sprite = null
tiles.setCurrentTilemap(tilemap`niveau1`)
enemy_1()
Mario = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e d d f d . . . . . 
    . . . e d e d d d f d d d . . . 
    . . . e d e e d d d f d d d . . 
    . . . . e d d d d f f f f . . . 
    . . . . . d d d d d d d . . . . 
    . . . . 2 2 8 2 2 2 8 2 2 . . . 
    . . . 2 2 2 8 2 2 2 8 2 2 2 . . 
    . . 2 2 2 2 8 8 8 8 8 2 2 2 2 . 
    . . d d . . . . . . . . . d d . 
    . . d d d . . . . . . . d d d . 
    . . d d . . . . . . . . . d d . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Mario, 100, 0)
Mario.x = 24
Mario.y = 220
Mario.ay = 400
scene.cameraFollowSprite(Mario)
game.onUpdate(function () {
    for (let valeur of sprites.allOfKind(SpriteKind.goomba)) {
        if (valeur.isHittingTile(CollisionDirection.Left)) {
            Goomba.vx = 50
        } else if (valeur.isHittingTile(CollisionDirection.Right)) {
            Goomba.vx = -50
        }
    }
})
