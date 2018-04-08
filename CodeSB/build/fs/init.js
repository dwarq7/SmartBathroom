load('api_config.js');
load('api_events.js');
load('api_gpio.js');
load('api_mqtt.js');
load('api_net.js');
load('api_sys.js');
load('api_timer.js');

let pinSwitch = 5; //D1
let pinLed = 2;
let pinLed = ffi('int get_led_gpio_pin()'); //D4
GPIO.set_mode(pinLed, GPIO.MODE_OUTPUT); //init
GPIO.set_mode(pinSwitch, GPIO.MODE_INPUT); // Init pin as input
GPIO.set_button_handler(pinSwitch, GPIO.PULL_DOWN, GPIO.INT_EDGE_ANY, 200, function(x){
    let isSwitchOff = GPIO.read(pinSwitch) === 0 ? 1 : 0; //if GPIO is 0 then write isSwitchOff = 1; else ifSwitchOff = 0;
    print(Sys.uptime(), '---V->', 'pin#', x, "; isSwitchOff = ",isSwitchOff);
    // GPIO.write(pinLed, isSwitchOff === 1 ? 0 : 1);
    GPIO.write(pinLed, isSwitchOff === 1 ? 0 : 1);
},null);