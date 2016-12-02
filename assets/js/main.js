// Create 4 variable and link them to the calculator screen and buttons.
var viewNum = document.getElementById("view-num");
var viewNumScreen = viewNum.innerHTML;
var blank = "";
var viewNumLastCharDel = viewNum.innerHTML.substring(0, viewNum.innerHTML.length - 1);

function _(id) {
  return document.querySelectorAll(id);
}
function _onClick() {
  
}

// Loops until there are no more number buttons.
for (i = 0; i < _(".num").length; i++) {
  // During each iteration a NumButton instance is created.
  var numButtons = new NumButton_Constructor(i);
};
for (x = 0; x < _(".op").length; x++) {
  var opButtons = new OpButton_Constructor(x);
};
for (y = 0; y < _(".cl2").length; y++) {
  var delCleEntButtons = new delCleEntButton_Constructor(y);
};

// Button Constructors


// Number Button Conctructor
function NumButton_Constructor(i) {
  this.i = i;
  _(".num")[i].addEventListener('click',function () {
    // then add the corresponding numerical value to the calculator screen.
    viewNum.innerHTML += i;
  });
}

// Operator Button Constructor
function OpButton_Constructor(x) {
  this.x = x;
  // Wait and listen for an operator button to be clicked on.
  _(".op")[x].addEventListener('click', function () {
    // Variables
    var viewNumLastChar = viewNum.innerHTML.substr(viewNum.innerHTML.length - 1);
    var op1 = "*", op2 = "/", op3 = "+", op4 = "-", op5 = "%", op6 = ".";
    var viewNumLastCharDel = viewNum.innerHTML.substring(0, viewNum.innerHTML.length - 1);
    var LastCharOfViewEqualOp = [op1, op2, op3, op4, op5, op6].indexOf(viewNumLastChar) > -1;
    switch(x) {
      case 0: {
        // If an operator already precede the one that's about to be added.
        if (LastCharOfViewEqualOp) {
          // delete it.
          viewNumScreen = viewNumLastCharDel;
          // Then add the operator assigned to this button.
          viewNum.innerHTML += op1;
        } else {
          // Otherwise, continue and add the corresponding operator to the calculator screen. 
            viewNum.innerHTML += op1;
          }
        break;
      }
      case 1: {
        if (LastCharOfViewEqualOp) { 
          viewNumScreen = viewNumLastCharDel;
          viewNum.innerHTML += op2;
        } else {
            viewNum.innerHTML += op2;
          }
        break;
      }
      case 2: {
        if (LastCharOfViewEqualOp) { 
          viewNumScreen = viewNumLastCharDel;
          viewNum.innerHTML += op3;
        } else {
            viewNum.innerHTML += op3;
          }
        break;
      }
      case 3: {
        if (LastCharOfViewEqualOp) { 
          viewNumScreen = viewNumLastCharDel;
          viewNum.innerHTML += op4;
        } else {
            viewNum.innerHTML += op4;
          }
        break;
      }
      case 4: {
        if (LastCharOfViewEqualOp) { 
          viewNumScreen = viewNumLastCharDel;
          viewNum.innerHTML += op5;
        } else {
            viewNum.innerHTML += op5;
          }
        break;
      }
      case 5: {
        if (LastCharOfViewEqualOp) { 
          viewNumScreen = viewNumLastCharDel;
          viewNum.innerHTML += op6;
        } else {
            viewNum.innerHTML += op6;
          }
        break;
      }
      default: {
        viewNum.innerHTML += blank
      }
    }
  });
}

// Delete, Clear, and Enter Button Constructor
function delCleEntButton_Constructor(y) {
  this.y = y;
  // Wait and listen for a Delete, Clear, or Enter button to be clicked on.
  _(".cl2")[y].addEventListener('click', function () {
    // Vars
    switch(y) {
      case 0: {
        // If the Delete button is pressed, remove the last character of the string assigned to the calculator screen.
        viewNumScreen = viewNumLastCharDel;
        break;
      }
      case 1: {
        // If the Clear button is pressed, assign a blank string to the calculator screen.
        viewNum.innerHTML = blank;
        break;
      }
      case 2: {
        var resultnum;
        // If the Enter button is pressed, copy the string of operators and numbers from the calculator screen and assign it to a new variable.
        function copyView() {
          resultnum = viewNum.innerHTML;
          clearView();
        }
        // Afterwards, clear the calculator screen by assigning a blank string to the calculator screen.
        function clearView(collectResult) {
          viewNum.innerHTML = blank;
          newView();
        }
        function newView(clearView) {
        // Then check the new variable and see if the evaluation failed.
          if (resultnum === blank) {
          // If it failed clear the calculator screen.
            viewNum.innerHTML = blank;
          } else {
            // If it didn't fail, then continue and assign the results of the evaluation to the calculator screen.
            viewNum.innerHTML = eval(resultnum);
            }
        }
      copyView();
        break;
      }
      default:
        // Blank screen.
        viewNum.innerHTML = blank
    }
  });
}


