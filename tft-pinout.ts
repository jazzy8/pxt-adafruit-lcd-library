//% block="TFT" color=#111
namespace TftPinout {
    //% block="reset on pin %p"
    /**
     * TODO: Reset the display.
     * @param p is pin number, eg: DigitalPin.P0
     */
    export function resetTft(p: DigitalPin) {
        pins.digitalWritePin(p, 0)
        basic.pause(2)
        pins.digitalWritePin(p, 1)
    }
}