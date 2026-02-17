export function deviceFirmwareTemplate(): string {
  return [
    "import time",
    "from machine import Pin, ADC",
    "",
    "led = Pin(2, Pin.OUT)",
    "sensor = ADC(0)",
    "",
    "while True:",
    "    reading = sensor.read()",
    "    led.value(1 if reading > 500 else 0)",
    "    time.sleep(0.5)",
  ].join("\n");
}
