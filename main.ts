namespace SpriteKind {
    export const goomba = SpriteKind.create()
    export const animation = SpriteKind.create()
    export const blockMystere = SpriteKind.create()
    export const goomba2 = SpriteKind.create()
    export const goomba3 = SpriteKind.create()
    export const goomba4 = SpriteKind.create()
    export const goomba5 = SpriteKind.create()
    export const goomba6 = SpriteKind.create()
    export const piece = SpriteKind.create()
}
function Goomba () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile38`)) {
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
    for (let valeur of tiles.getTilesByType(assets.tile`myTile48`)) {
        kaka2 = sprites.create(img`
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
            `, SpriteKind.goomba2)
        tiles.placeOnTile(kaka2, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            kaka2.vx = 50
        } else {
            kaka2.vx = -50
        }
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile50`)) {
        kaka3 = sprites.create(img`
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
            `, SpriteKind.goomba3)
        tiles.placeOnTile(kaka3, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            kaka3.vx = 50
        } else {
            kaka3.vx = -50
        }
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile52`)) {
        kaka4 = sprites.create(img`
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
            `, SpriteKind.goomba4)
        tiles.placeOnTile(kaka4, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            kaka4.vx = 50
        } else {
            kaka4.vx = -50
        }
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile53`)) {
        kaka5 = sprites.create(img`
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
            `, SpriteKind.goomba5)
        tiles.placeOnTile(kaka5, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            kaka5.vx = 50
        } else {
            kaka5.vx = -50
        }
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile54`)) {
        kaka6 = sprites.create(img`
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
            `, SpriteKind.goomba6)
        tiles.placeOnTile(kaka6, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
        if (Math.percentChance(50)) {
            kaka6.vx = 50
        } else {
            kaka6.vx = -50
        }
    }
}
function e () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile79`)) {
        piece = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.piece)
        animation.runImageAnimation(
        piece,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(piece, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile79`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba4, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka4.destroy(effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    info.changeLifeBy(-10)
})
function Appel_champignon () {
    tiles.placeOnTile(Champignon, tiles.getTileLocation(15, 10))
    Champignon = sprites.create(img`
        . . . . . . c c c 6 6 . . . . . 
        . . . . . . c c c 6 6 . . . . . 
        . . . . . c 4 4 4 4 4 6 6 6 . . 
        . . . 4 4 4 b 4 4 4 5 4 4 4 b . 
        . . 6 4 4 4 4 4 4 b 4 b b b 4 6 
        . e b 4 4 4 4 4 4 4 4 4 4 4 5 4 
        e b b 4 4 4 b 4 4 4 4 b b 4 4 4 
        f b 6 4 4 4 4 4 4 4 4 5 5 4 4 4 
        . 8 c 6 6 6 6 b b 4 4 4 4 4 b 6 
        . 8 c 6 6 6 6 b b 4 4 4 4 4 b 6 
        8 7 e c c b b b b b b b b b c 7 
        f 8 6 2 2 2 2 2 2 2 2 2 2 2 7 8 
        f b f f f f f 7 7 6 8 f f e e b 
        f 6 d f f f e f f f e e e f e 4 
        . . 6 4 4 4 4 4 4 4 4 4 4 4 4 e 
        . . f b b b 4 4 4 4 4 4 4 4 e . 
        `, SpriteKind.Food)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile60`, function (sprite, location) {
    if (controller.right.isPressed()) {
        tiles.placeOnTile(Mario, tiles.getTileLocation(167.5, 12))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (controller.down.isPressed()) {
        tiles.placeOnTile(Mario, tiles.getTileLocation(152, 37))
    }
})
function animationMarcheGauche () {
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
    150,
    true
    )
}
function mysetere () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile1`)) {
        block_mystere = sprites.create(img`
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            4 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            4 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            4 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
            4 5 5 5 4 4 f 5 5 4 4 f 5 5 5 f 
            4 5 5 5 5 f f 5 4 4 4 f 5 5 5 f 
            4 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            4 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            4 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            4 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            4 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.blockMystere)
        tiles.placeOnTile(block_mystere, valeur)
        tiles.setTileAt(valeur, assets.tile`myTile6`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba3, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka3.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba6, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka5.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba5, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka5.destroy(effects.disintegrate, 500)
})
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
        350,
        false
        )
        pause(500)
        animationMarcheDroite()
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
        350,
        false
        )
        pause(500)
        animationMarcheGauche()
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
        350,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka.destroy(effects.disintegrate, 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animationMarcheDroite()
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile87`, function (sprite, location) {
    Appel_champignon()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba2, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
    kaka2.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    scaling.scaleByPixels(Mario, 0.5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
function animationMarcheDroite () {
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
    150,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    info.changeLifeBy(-10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.piece, function (sprite, otherSprite) {
    e()
    info.changeScoreBy(100)
    sprites.destroy(piece)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animationMarcheGauche()
})
let deplacement = false
let block_mystere: Sprite = null
let Champignon: Sprite = null
let piece: Sprite = null
let kaka6: Sprite = null
let kaka5: Sprite = null
let kaka4: Sprite = null
let kaka3: Sprite = null
let kaka2: Sprite = null
let kaka: Sprite = null
let Mario: Sprite = null
tiles.setCurrentTilemap(tilemap`niveau1`)
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
Goomba()
mysetere()
game.onUpdate(function () {
    deplacement = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(deplacement)) {
        animation.stopAnimation(animation.AnimationTypes.All, Mario)
    }
})
game.onUpdate(function () {
    for (let valeur of sprites.allOfKind(SpriteKind.goomba)) {
        if (kaka.isHittingTile(CollisionDirection.Left)) {
            kaka.vx = 50
        } else if (kaka.isHittingTile(CollisionDirection.Right)) {
            kaka.vx = -50
        }
    }
    for (let valeur of sprites.allOfKind(SpriteKind.goomba2)) {
        if (kaka2.isHittingTile(CollisionDirection.Left)) {
            kaka2.vx = 50
        } else if (kaka2.isHittingTile(CollisionDirection.Right)) {
            kaka2.vx = -50
        }
    }
    for (let valeur of sprites.allOfKind(SpriteKind.goomba3)) {
        if (kaka3.isHittingTile(CollisionDirection.Left)) {
            kaka3.vx = 50
        } else if (kaka3.isHittingTile(CollisionDirection.Right)) {
            kaka3.vx = -50
        }
    }
    for (let valeur of sprites.allOfKind(SpriteKind.goomba4)) {
        if (kaka4.isHittingTile(CollisionDirection.Left)) {
            kaka4.vx = 50
        } else if (kaka4.isHittingTile(CollisionDirection.Right)) {
            kaka4.vx = -50
        }
    }
    for (let valeur of sprites.allOfKind(SpriteKind.goomba5)) {
        if (kaka5.isHittingTile(CollisionDirection.Left)) {
            kaka5.vx = 50
        } else if (kaka5.isHittingTile(CollisionDirection.Right)) {
            kaka5.vx = -50
        }
    }
    for (let valeur of sprites.allOfKind(SpriteKind.goomba6)) {
        if (kaka6.isHittingTile(CollisionDirection.Left)) {
            kaka6.vx = 50
        } else if (kaka6.isHittingTile(CollisionDirection.Right)) {
            kaka6.vx = -50
        }
    }
})
