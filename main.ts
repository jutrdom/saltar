input.onButtonPressed(Button.A, function () {
    Jugador_Arriba.change(LedSpriteProperty.Y, -1)
    Jugador_Abajo.change(LedSpriteProperty.Y, -1)
})
let Jugador_Abajo: game.LedSprite = null
let Jugador_Arriba: game.LedSprite = null
Jugador_Arriba = game.createSprite(1, 3)
Jugador_Abajo = game.createSprite(1, 4)
let obstaculo = game.createSprite(4, 4)
basic.forever(function () {
	
})
