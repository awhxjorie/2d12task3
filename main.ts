let count = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.pause(200)
    basic.showNumber(2)
    basic.pause(200)
    basic.showNumber(3)
    basic.pause(200)
    basic.showNumber(4)
    basic.pause(200)
    basic.showNumber(5)
    basic.pause(200)
    basic.showNumber(6)
})
input.onButtonPressed(Button.B, function () {
    count = 9
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        basic.pause(200)
        count += -1
    }
})
