class Car {
  constructor(make, model, color, year) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.year = year
    this.signals = "off"
  }

  wheels() {
    return 4
  }
  lights() {
    return "off"
  }
  speed() {
    return 0
  }
  carInfo() {
    console.log(`This car is a ${this.color} ${this.make} ${this.model} ${this.year}`)
  }

    carLightSwitch() {
      if (this.lights === "off") {
        this.lights = "on"
        console.log("The car lights are on");
      } else {
        this.lights = "off"
        console.log("The car lights are off");
      }
    }

    leftSignal() {
      this.signals = "Signal left"
    }

    rightSignal() {
      this.signals = "Signal right"
    }
}

class Tesla extends Car {
  constructor(...args) {
    super(...args);
    this.accelerate = function() {
      this.speed += 10
      console.log(`You are now cruising at ${this.speed} MPH`);
    }
    this.brake = function() {
      this.speed -= 7
      console.log(`You are now cruising at ${this.speed} MPH`);
    }
  }
}
var myTesla = new Tesla

class Tata extends Car {
  constructor(...args){
    super(...args)
    this.accelerate = function() {
      this.speed += 2
      console.log(`You are now cruising at ${this.speed} MPH`);
    }
    this.brake = function() {
      this.speed -= 1.25
      console.log(`You are now cruising at ${this.speed} MPH`);
    }
  }
}
var myTata = new Tata

class Toyota extends Car {
  constructor(...args) {
    super(...args)
    this.accelerate = function() {
      this.speed += 7
      console.log(`You are now cruising at ${this.speed} MPH`);
    }
    this.brake = function() {
      this.speed -= 5
      console.log(`You are now cruising at ${this.speed} MPH`);
    }
  }
}
var myToyota = new Toyota
