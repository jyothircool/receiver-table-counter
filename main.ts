radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        _1 = 1
    } else if (receivedNumber == 2) {
        _1 = 0
    } else if (receivedNumber == 3) {
        _2 = 1
    } else if (receivedNumber == 4) {
        _2 = 0
    } else if (receivedNumber == 5) {
        _3 = 1
    } else if (receivedNumber == 6) {
        _3 = 0
    } else if (receivedNumber == 7) {
        _4 = 1
    } else if (receivedNumber == 8) {
        _4 = 0
    } else if (receivedNumber == 9) {
        _5 = 1
    } else if (receivedNumber == 10) {
        _5 = 0
    } else if (receivedNumber == 11) {
        _6 = 1
    } else if (receivedNumber == 12) {
        _6 = 0
    }
})
let total = 0
let _6 = 0
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
radio.setGroup(1)
_1 = 0
_2 = 0
_3 = 0
_4 = 0
_5 = 0
_6 = 0
basic.forever(function () {
    total = _1 + (_2 + (_3 + (_4 + (_5 + _6))))
    if (total <= 5) {
        basic.showNumber(total)
    } else {
        basic.showNumber(total)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
})
