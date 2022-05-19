basic.showIcon(IconNames.Ghost)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 65)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 82)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 82)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 65)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
    }
})