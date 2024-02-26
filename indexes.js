function calculate() {
  const inputA = parseFloat(document.getElementById('inputValueA').value);
  const inputB = parseFloat(document.getElementById('inputValueB').value);
  const operation = document.getElementById('operationInput').value.toLowerCase();
  if (isNaN(inputA) || isNaN(inputB)) {
      alert('Please enter valid numbers for Input A and Input B');
      return;
  }
  let result;
  switch (operation) {
      case 'addition':
          result = inputA + inputB;
          break;
      case 'subtraction':
          result = inputA - inputB;
          break;
      case 'multiplication':
          result = inputA * inputB;
          break;
      default:
          alert('Please select a valid operation');
          return;
  }
  alert(`The result of ${inputA} ${getOperationSymbol(operation)} ${inputB} is ${result}`);
}
function getOperationSymbol(operation) {
  switch (operation) {
      case 'addition':
          return '+';
      case 'subtraction':
          return '-';
      case 'multiplication':
          return '*';
      default:
          return '';
  }
}

