input.onButtonPressed(Button.A, function () {
    MaxSoundLevel = 0
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 100; index++) {
        MaxSoundLevel = Math.max(MaxSoundLevel, Environment.ReadNoise(AnalogPin.P0))
        basic.pause(100)
    }
    result = MaxSoundLevel
    basic.showNumber(result)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(result)
})
let MaxSoundLevel = 0
let result = 0
basic.showIcon(IconNames.Surprised)
result = 0
basic.forever(function () {
    basic.showNumber(Environment.ReadNoise(AnalogPin.P0))
    serial.writeValue("Loudness", Environment.ReadNoise(AnalogPin.P0))
})
