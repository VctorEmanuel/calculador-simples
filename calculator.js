function calculate(type, value) {
    if (type === 'action') {
      if (value === 'c') {
        //Clean result
        document.getElementById('result').value = ''
      }
      if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
        document.getElementById('result').value += value
      }
      if (value === '=') {
        let input = document.getElementById('result').value
        document.getElementById('result').value = eval(input)
      }          
    } else if (type === 'value') {
      document.getElementById('result').value += value
    }
  }