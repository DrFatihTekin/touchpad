keyboard.kbEvent(KeyValue.keyany, function () {
    keyboard.setIndexColor(keyboard.keyBasic(), 0x0000ff)
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(100)
    keyboard.ledBlank()
    keyboard.vibrationMotor(OnOff.OFF)
    basic.showString("" + (keyboard.keyBasic()))
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
	
})
