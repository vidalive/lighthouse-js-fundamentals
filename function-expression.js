var cat = function (num) {
  // step 1: define a var to store the result of this function in
  var result = "";
  //step 2: calculation of the result
  for (let i = 0; i < num; i++) {
    result += "meow";

  }
  //step 3: return result
  return result;
};

// step 4: calling the variable that the function is store in with ()
cat(3);

// output:
// "meowmeowmeow"

