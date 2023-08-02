// Different ways to define a function in JavaScript
// Function Declaration
function add(a, b) {
    return a + b;
  }
  
  // Function Expression
  const subtract = function(a, b) {
    return a - b;
  };
  
  // Arrow Function
  const multiply = (a, b) => a * b;
  
  // Function Constructor
  const divide = new Function('a', 'b', 'return a / b');
  