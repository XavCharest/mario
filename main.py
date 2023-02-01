@namespace
class SpriteKind:
    goomba = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.over(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def goomba2():
    global kaka
    for valeur in tiles.get_tiles_by_type(assets.tile("""
        myTile14
    """)):
        kaka = sprites.create(img("""
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
            """),
            SpriteKind.goomba)
        tiles.place_on_tile(kaka, valeur)
        tiles.set_tile_at(valeur, assets.tile("""
            myTile6
        """))
        if Math.percent_chance(50):
            kaka.vx = 50
        else:
            kaka.vx = -50

def on_up_pressed():
    if Mario.vy == 0:
        Mario.vy = -200
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap(sprite2, otherSprite):
    info.change_life_by(-1)
    kaka.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.goomba, on_on_overlap)

kaka: Sprite = None
Mario: Sprite = None
tiles.set_current_tilemap(tilemap("""
    niveau1
"""))
info.set_life(3)
Mario = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Mario, 100, 0)
Mario.x = 24
Mario.y = 220
Mario.ay = 400
scene.camera_follow_sprite(Mario)

def on_on_update():
    for valeur2 in sprites.all_of_kind(SpriteKind.goomba):
        if kaka.is_hitting_tile(CollisionDirection.LEFT):
            kaka.vx = 50
        elif kaka.is_hitting_tile(CollisionDirection.RIGHT):
            kaka.vx = -50
game.on_update(on_on_update)
