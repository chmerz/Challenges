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
