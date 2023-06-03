let distance = 0
keyboard.ServoRun(keyboard.aServos.S1, 0)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 10) {
        keyboard.ServoRun(keyboard.aServos.S1, 40)
        basic.pause(5000)
        keyboard.ServoRun(keyboard.aServos.S1, 0)
    }
    basic.pause(1000)
})
