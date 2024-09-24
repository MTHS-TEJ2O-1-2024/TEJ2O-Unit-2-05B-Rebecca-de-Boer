/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Sep 2024
 * This program finds temperature with Kelvin.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
    let tempetureCelcius = input.temperature()
    let tempetureKelvin = tempetureCelcius + 273.15
    basic.showString('The temperature is: ')
    basic.showNumber(tempetureKelvin)
    basic.showString(' K.')
})
