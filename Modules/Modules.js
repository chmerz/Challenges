class Car {
  constructor(x) {
    this.speedX = 0;
    this.x = x;
  }
  // this.newPos = function() {
  //       this.x += this.speedX;
  //   }
    brake() {
        myGamePiece.speedX -= 1;
    }
}

var myTesla = new Car()

function Accelerate() {
    var myGamePiece = document.getElementById("myGamePiece")
    console.log(myTesla.speedX)
    myGamePiece.style.left = (myTesla.speedX += 20) + "px";
}



 // accelerate() {
 //        this.speed += 10
 //    }
 // brake () {
 //        this.speed -= 7
 //    }

// }
// var myTesla = new Car
// // module.exports = Car;
