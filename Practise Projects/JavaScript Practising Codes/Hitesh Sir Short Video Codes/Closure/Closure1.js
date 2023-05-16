function init() {
  var firstName = "hitesh";
  console.log("I am init");

  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName;
}

var value = init();

value();