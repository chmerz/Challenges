function greaterNum(a,b) {
if (a > b) {
return a ;
};
if (b > a) {
return b;
};
};
greaterNum(15,9)



function helloWorld(a){
  if (a == "de"){
    return "Hallo, Welt"
  }
  else if (a == "es"){
    return "Hola, Mundo"
  }
  else {
    return "Hello, World"
  };
};

helloWorld("en")
helloWorld("es")
helloWorld("de")


function assignGrade(a){
  if (a >= "90%"){
    return "A"
  }
  else if (a>= "80%"){
    return "B"
  }
  else if (a>="70%"){
    return "C"
  }
  else if (a>="60%"){
    return "D"
  }
  else if (a>="50%"){
    return "F"
  };
};


function pluralize (a,b) {
  if (a > 1&& b == "child"){
    return a + " children"
  }
  if (a == 1&& b == b){
    return a + " " + b
  }
  else {
    return a +" " + b + "s"
  }
};

pluralize(5, "child")

var count = 0;
  while (count < 15) {
    count = count + 1;
    if (count % 2 == 0) {
      console.log (count + " is even")
    }
    else {
      console.log (count + " is odd")
    }
  };
