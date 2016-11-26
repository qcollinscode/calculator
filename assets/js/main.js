// Create 4 variable and link them to the calculator screen and buttons.
var viewNum = document.getElementById("view-num");
var blank = "";
var numButtonsLength = _(".num").length;
var opButtonsLength = _(".op").length;
var delCleEntButtonsLength = _(".cl2").length;
var clearScreen = function() { viewNum.innerHTML += blank; }

function _(id) {
  return document.querySelectorAll(id);
}
function _onClick() {
  
}

// Loops until there are no more number buttons.
for (i = 0; i < numButtonsLength; i++) {
  // During each iteration a NumButton instance is created.
  var numButtons = new NumButton_Constructor(i);
};
for (x = 0; x < opButtonsLength; x++) {
  var opButtons = new OpButton_Constructor(x);
};
for (y = 0; y < delCleEntButtonsLength; y++) {
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
    var deleteThenShow = function(op) { viewNum.innerHTML = viewNumLastCharDel; viewNum.innerHTML += op; }
    var show = function(op) { viewNum.innerHTML += op; }
    switch(x) {
      case 0: {
        // If an operator already precede the one that's about to be added. Delete it then add the operator. Else continue and 
        LastCharOfViewEqualOp ? deleteThenShow(op1) : show(op1);
        break;
      }
      case 1: {
        LastCharOfViewEqualOp ? deleteThenShow(op2) : show(op2);
        break;
      }
      case 2: {
        LastCharOfViewEqualOp ? deleteThenShow(op3) : show(op3);
        break;
      }
      case 3: {
        LastCharOfViewEqualOp ? deleteThenShow(op4) : show(op4);
        break;
      }
      case 4: {
        LastCharOfViewEqualOp ? deleteThenShow(op5) : show(op5);
        break;
      }
      case 5: {
        LastCharOfViewEqualOp ? deleteThenShow(op6) : show(op6);
        break;
      }
      default: {
        clearScreen();
      }
    }
  });
}

// Delete, Clear, and Enter Button Constructor
function delCleEntButton_Constructor(y, c) {
  this.y = y;
  // Wait and listen for a Delete, Clear, or Enter button to be clicked on.
  _(".cl2")[y].addEventListener('click', function () {
    // Vars
    var viewNumLastCharDel = viewNum.innerHTML.substring(0, viewNum.innerHTML.length - 1);
    switch(y) {
      case 0: {
        // If the Delete button is pressed, remove the last character of the string assigned to the calculator screen.
        viewNum.innerHTML = viewNumLastCharDel;
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
          viewNum.innerHTML = blank;
          clearView();
        }
        // Afterwards, clear the calculator screen by assigning a blank string to the calculator screen.
        function clearView(collectResult) {
          viewNum.innerHTML = blank;
          newView();
        }
        function newView(clearView) {
        // Then check the new variable and see if the evaluation failed.
          if (resultnum === "") {
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
        viewNum.innerHTML = blank;
    }
  });
}



