input.onButtonPressed(Button.A, function () {
    servos.P0.run(100)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
})
basic.forever(function () {
	
})
