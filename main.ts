info.onScore(30, function () {
    game.gameOver(true)
    game.setGameOverMessage(true, " Happy Birthday shosho")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    cake.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
let cake: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . . f f f f f f . . . 
    . . . . f f f 5 5 5 5 5 f f . . 
    . . . . f 5 5 5 5 5 5 5 5 f . . 
    . . . . f 5 5 5 5 5 5 5 5 f . . 
    . . . . f 5 5 f 5 5 f 5 5 f . . 
    . . . . f 5 5 5 5 5 5 5 5 f . . 
    . . . . f 5 5 f f f f 5 5 f . . 
    . . . . f 5 5 5 5 5 5 5 5 f . . 
    . . . . f 5 5 5 5 5 5 5 5 f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
cake = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 1 1 1 1 1 3 3 . . . 
    . . . . 3 3 1 1 1 1 1 3 3 . . . 
    . . 3 3 3 3 1 1 1 1 1 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . . e e e e e . . . . e e e e e 
    `, SpriteKind.Food)
game.showLongText("hello this is your special game for your birthday coded by nile", DialogLayout.Bottom)
scene.cameraFollowSprite(mySprite)
