input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        RingbitCar.back()
        basic.pause(400)
        RingbitCar.forward()
        basic.pause(600)
        RingbitCar.back()
        basic.pause(400)
        RingbitCar.forward()
        basic.pause(600)
    }
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
