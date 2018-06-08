#include <Servo.h>
#include "HX711.h"

HX711 scale(4, 5);

float calibration_factor = 400; // this calibration factor is adjusted according to my load cell
float units;
String readStr;

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  Serial.begin(9600);
  scale.set_scale();
  scale.tare();  //Reset the scale to 0
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  myservo.write(0);
}
float readWei(){
  float u;
  scale.set_scale(calibration_factor); //Adjust to this calibration factor
  u = scale.get_units(), 10;
  if (u < 0)
  {
    u = 0.00;
  }
  u = u * 0.035274; 
  return u;   
}

void loop() {
  units = readWei();

  Serial.println(units); // weight in oz
  if(Serial.available())
  {
    readStr = "";
    while(Serial.available() > 0){
      char temp = Serial.read();
      readStr += temp;
    }
    Serial.println(readStr);
    float targetval = readStr.toDouble();
    Serial.println(targetval);
    while(units < (targetval-0.1) ){
      Serial.println("in");
      for(pos = 0; pos <= 40; pos += 5){
        myservo.write(pos);
        delay(15);
      }
      delay(100);
      for(pos = 40; pos >= 0; pos -= 5){
        myservo.write(pos);
        delay(15);
      }
      units = readWei();
      Serial.print(readWei());
      delay(1000);
      units = readWei();
      Serial.print(readWei());
    }
  }
  delay(500);

  
}

