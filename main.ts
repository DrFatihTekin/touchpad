let distance = 0
keyboard.ServoRun(keyboard.aServos.S1, 0)
loops.everyInterval(500, function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 10 && distance != 0) {
        basic.showIcon(IconNames.Heart)
        keyboard.ServoRun(keyboard.aServos.S1, 40)
        basic.pause(5000)
        keyboard.ServoRun(keyboard.aServos.S1, 0)
    }
    basic.showIcon(IconNames.Happy)
})
