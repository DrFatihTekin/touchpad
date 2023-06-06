input.onButtonPressed(Button.A, function () {
    show_distance = 0
})
input.onButtonPressed(Button.B, function () {
    show_distance = 1
})
let distance = 0
let show_distance = 0
keyboard.ServoRun(keyboard.aServos.S1, 0)
basic.showIcon(IconNames.Happy)
show_distance = 0
loops.everyInterval(500, function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance < 10 && distance != 0) {
        keyboard.ServoRun(keyboard.aServos.S1, 40)
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        keyboard.ServoRun(keyboard.aServos.S1, 0)
    }
    if (show_distance == 1) {
        basic.showNumber(distance)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
