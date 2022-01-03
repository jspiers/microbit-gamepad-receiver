devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
    stop()
})
function turnright () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 30)
    basic.showArrow(ArrowNames.East)
}
bluetooth.onBluetoothConnected(function () {
    soundExpression.hello.play()
})
function stop () {
    wuKong.stopAllMotor()
    basic.clearScreen()
}
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    clawdown()
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    clawclose()
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    turnright()
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    turnleft()
})
function clawdown () {
    basic.showArrow(ArrowNames.South)
}
function clawup () {
    basic.showArrow(ArrowNames.North)
}
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    clawup()
})
function clawclose () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
    basic.showIcon(IconNames.SmallDiamond)
}
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    stop()
})
function clawopen () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
    basic.showIcon(IconNames.Square)
}
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    clawopen()
})
devices.onGamepadButton(MesDpadButtonInfo._2Up, function () {
    stop()
})
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
    stop()
})
function turnleft () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -30)
    basic.showArrow(ArrowNames.West)
}
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    stop()
})
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    stop()
})
bluetooth.startLEDService()
