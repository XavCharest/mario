namespace SpriteKind {
    export const goomba = SpriteKind.create()
    export const animation = SpriteKind.create()
    export const blockMystere = SpriteKind.create()
}
function goomba2 () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile4`)) {
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
    if (controller.right.isPressed() && controller.up.isPressed()) {
        animation.runImageAnimation(
        Mario,
        [img`
            . . . . . . . . . . . . d d . . 
            . . . . . 2 2 2 2 2 . . d d . . 
            . . . . 2 2 2 2 2 2 2 2 2 d . . 
            . . . . e e e d d e d . c c . . 
            . . . e d e d d d e d d c c . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d c . . . . 
            . . c c c 2 c c c 2 c . . . . . 
            . c c c c c 2 c c c 2 . . . . . 
            d d c c c c 2 2 2 2 2 . . c . . 
            d d d 2 2 2 2 5 2 2 5 2 c c . . 
            . d . 2 2 2 2 2 2 2 2 2 c c . . 
            . . c c 2 2 2 2 2 2 2 2 c c . . 
            c c c 2 2 2 2 2 2 2 . . . . . . 
            c c . . 2 2 2 . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . . . c c 2 c c c . . . . . . 
            . . . c c c c 2 2 c c . . . . . 
            . . . c c c 2 2 5 2 2 . . . . . 
            . . . c c c 2 2 2 2 2 2 . . . . 
            . . . c c c d d d 2 2 2 . . . . 
            . . . . c c d d 2 2 2 . . . . . 
            . . . . 2 2 2 2 c c c . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . . c c c c c . . . . . . . 
            `],
        500,
        false
        )
    } else if (controller.left.isPressed() && controller.up.isPressed()) {
        animation.runImageAnimation(
        Mario,
        [img`
            . . d d . . . . . . . . . . . . 
            . . d d . . 2 2 2 2 2 . . . . . 
            . . d 2 2 2 2 2 2 2 2 2 . . . . 
            . . c c . d e d d e e e . . . . 
            . . c c d d e d d d e d e . . . 
            . . d d d e d d d e e d e . . . 
            . . . e e e e d d d d e e . . . 
            . . . . c d d d d d d . . . . . 
            . . . . . c 2 c c c 2 c c c . . 
            . . . . . 2 c c c 2 c c c c c . 
            . . c . . 2 2 2 2 2 c c c c d d 
            . . c c 2 5 2 2 5 2 2 2 2 d d d 
            . . c c 2 2 2 2 2 2 2 2 2 . d . 
            . . c c 2 2 2 2 2 2 2 2 c c . . 
            . . . . . . 2 2 2 2 2 2 2 c c c 
            . . . . . . . . . 2 2 2 . . c c 
            `,img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . . d e d d e e e . . . . 
            . . . d d d e d d d e d e . . . 
            . . d d d e d d d e e d e . . . 
            . . . e e e e d d d d e e . . . 
            . . . . d d d d d d d . . . . . 
            . . . . . . c c c 2 c c . . . . 
            . . . . . c c 2 2 c c c c . . . 
            . . . . . 2 2 5 2 2 c c c . . . 
            . . . . 2 2 2 2 2 2 c c c . . . 
            . . . . 2 2 2 d d d c c c . . . 
            . . . . . 2 2 2 d d c c . . . . 
            . . . . . c c c 2 2 2 2 . . . . 
            . . . . c c c c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            `],
        500,
        false
        )
    } else {
        animation.runImageAnimation(
        Mario,
        [img`
            . . . . . . . . . . . . d d . . 
            . . . . . 2 2 2 2 2 . . d d . . 
            . . . . 2 2 2 2 2 2 2 2 2 d . . 
            . . . . e e e d d e d . c c . . 
            . . . e d e d d d e d d c c . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d c . . . . 
            . . c c c 2 c c c 2 c . . . . . 
            . c c c c c 2 c c c 2 . . . . . 
            d d c c c c 2 2 2 2 2 . . c . . 
            d d d 2 2 2 2 5 2 2 5 2 c c . . 
            . d . 2 2 2 2 2 2 2 2 2 c c . . 
            . . c c 2 2 2 2 2 2 2 2 c c . . 
            c c c 2 2 2 2 2 2 2 . . . . . . 
            c c . . 2 2 2 . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . . . c c 2 c c c . . . . . . 
            . . . c c c c 2 2 c c . . . . . 
            . . . c c c 2 2 5 2 2 . . . . . 
            . . . c c c 2 2 2 2 2 2 . . . . 
            . . . c c c d d d 2 2 2 . . . . 
            . . . . c c d d 2 2 2 . . . . . 
            . . . . 2 2 2 2 c c c . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . . c c c c c . . . . . . . 
            `],
        500,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka.destroy(effects.disintegrate, 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vx == 100) {
        animation.runImageAnimation(
        Mario,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . c c c c 2 2 c c . . . . . . 
            d d c c c c 2 2 2 c c c d d d . 
            d d d . c c 2 5 2 2 2 c c d d . 
            d d . . 2 2 2 2 2 2 2 2 2 . c . 
            . . . 2 2 2 2 2 2 2 2 2 2 c c . 
            . . 2 2 2 2 2 2 2 2 2 2 2 c c . 
            . c c c 2 2 2 . . . 2 2 2 c c . 
            . c c c . . . . . . . . . . . . 
            . . c c c . . . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . . . c c c c c 2 c . d . . . 
            . . . d c c c c c c c d d d . . 
            . . . d c c c c c c d d d d . . 
            . . d d 2 c c c c c c d d . . . 
            . . c c 2 2 2 2 2 2 2 2 . . . . 
            . . c 2 2 2 2 2 2 2 2 2 . . . . 
            . c c 2 2 2 2 2 . 2 2 . . . . . 
            . c . . . . . . c c c . . . . . 
            . c . . . . . . c c c c . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . . . c c 2 c c c . . . . . . 
            . . . c c c c 2 2 c c . . . . . 
            . . . c c c 2 2 5 2 2 . . . . . 
            . . . c c c 2 2 2 2 2 2 . . . . 
            . . . c c c d d d 2 2 2 . . . . 
            . . . . c c d d 2 2 2 . . . . . 
            . . . . 2 2 2 2 c c c . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . . c c c c c . . . . . . . 
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        Mario,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . c c c c 2 2 c c . . . . . . 
            d d c c c c 2 2 2 c c c d d d . 
            d d d . c c 2 5 2 2 2 c c d d . 
            d d . . 2 2 2 2 2 2 2 2 2 . c . 
            . . . 2 2 2 2 2 2 2 2 2 2 c c . 
            . . 2 2 2 2 2 2 2 2 2 2 2 c c . 
            . c c c 2 2 2 . . . 2 2 2 c c . 
            . c c c . . . . . . . . . . . . 
            . . c c c . . . . . . . . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . . . c c c c c 2 c . d . . . 
            . . . d c c c c c c c d d d . . 
            . . . d c c c c c c d d d d . . 
            . . d d 2 c c c c c c d d . . . 
            . . c c 2 2 2 2 2 2 2 2 . . . . 
            . . c 2 2 2 2 2 2 2 2 2 . . . . 
            . c c 2 2 2 2 2 . 2 2 . . . . . 
            . c . . . . . . c c c . . . . . 
            . c . . . . . . c c c c . . . . 
            `,img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e d d e d . . . . . 
            . . . e d e d d d e d d d . . . 
            . . . e d e e d d d e d d d . . 
            . . . e e d d d d e e e e . . . 
            . . . . . d d d d d d d . . . . 
            . . . . c c 2 c c c . . . . . . 
            . . . c c c c 2 2 c c . . . . . 
            . . . c c c 2 2 5 2 2 . . . . . 
            . . . c c c 2 2 2 2 2 2 . . . . 
            . . . c c c d d d 2 2 2 . . . . 
            . . . . c c d d 2 2 2 . . . . . 
            . . . . 2 2 2 2 c c c . . . . . 
            . . . . c c c c c c c c . . . . 
            . . . . c c c c c . . . . . . . 
            `],
        200,
        true
        )
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mario,
    [img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d e d d e e e . . . . 
        . . . d d d e d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . c c 2 2 c c c c . . 
        . d d d c c c 2 2 2 c c c c d d 
        . d d c c 2 2 2 5 2 c c . d d d 
        . c . 2 2 2 2 2 2 2 2 2 . . d d 
        . c c 2 2 2 2 2 2 2 2 2 2 . . . 
        . c c 2 2 2 2 2 2 2 2 2 2 2 . . 
        . c c 2 2 2 . . . 2 2 2 c c c . 
        . . . . . . . . . . . . c c c . 
        . . . . . . . . . . . c c c . . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d e d d e e e . . . . 
        . . . d d d e d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . . d d d d d d d . . . . . 
        . . . d . c 2 c c c c c . . . . 
        . . d d d c c c c c c c d . . . 
        . . . d d d c c c c c c d . . . 
        . . . d d c c c c c c 2 d d . . 
        . . . . 2 2 2 2 2 2 2 2 c c . . 
        . . . . 2 2 2 2 2 2 2 2 2 c . . 
        . . . . . 2 2 . 2 2 2 2 2 c c . 
        . . . . . c c c . . . . . . c . 
        . . . . c c c c . . . . . . c . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . d e d d e e e . . . . 
        . . . d d d e d d d e d e . . . 
        . . d d d e d d d e e d e . . . 
        . . . e e e e d d d d e e . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . c c c 2 c c . . . . 
        . . . . . c c 2 2 c c c c . . . 
        . . . . . 2 2 5 2 2 c c c . . . 
        . . . . 2 2 2 2 2 2 c c c . . . 
        . . . . 2 2 2 d d d c c c . . . 
        . . . . . 2 2 2 d d c c . . . . 
        . . . . . c c c 2 2 2 2 . . . . 
        . . . . c c c c c c c c . . . . 
        . . . . . . . c c c c c . . . . 
        `],
    200,
    true
    )
})
let deplacement = false
let kaka: Sprite = null
let Mario: Sprite = null
tiles.setCurrentTilemap(tilemap`niveau1`)
goomba2()
info.setLife(3)
Mario = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e d d e d . . . . . 
    . . . e d e d d d e d d d . . . 
    . . . e d e e d d d e d d d . . 
    . . . e e d d d d e e e e . . . 
    . . . . . d d d d d d d . . . . 
    . . . . c c 2 c c c . . . . . . 
    . . . c c c c 2 2 c c . . . . . 
    . . . c c c 2 2 5 2 2 . . . . . 
    . . . c c c 2 2 2 2 2 2 . . . . 
    . . . c c c d d d 2 2 2 . . . . 
    . . . . c c d d 2 2 2 . . . . . 
    . . . . 2 2 2 2 c c c . . . . . 
    . . . . c c c c c c c c . . . . 
    . . . . c c c c c . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Mario, 100, 0)
Mario.x = 24
Mario.y = 220
Mario.ay = 400
scene.cameraFollowSprite(Mario)
game.onUpdate(function () {
    for (let valeur2 of sprites.allOfKind(SpriteKind.goomba)) {
        if (kaka.isHittingTile(CollisionDirection.Left)) {
            kaka.vx = 50
        } else if (kaka.isHittingTile(CollisionDirection.Right)) {
            kaka.vx = -50
        }
    }
})
game.onUpdate(function () {
    deplacement = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(deplacement)) {
        animation.stopAnimation(animation.AnimationTypes.All, Mario)
    }
})
