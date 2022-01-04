# SimpleCalculator
Web Developer Course Project

<html>
	<head>
		<title>Simple Calculator</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
    <link href="style.css" type="text/css" rel="stylesheet">
	</head>
  <body style="background: #D9D9D9">
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <br />
          <div class="calculator">
            <input type="text" class="form-control result" id="result" placeholder="0" disabled="disabled" />
            <div class="row">
              <button type="button" onclick="calculate('action', 'c')" class="btn btn-dark btn-lg clear font-weight-light">C</button>
              <button type="button" onclick="calculate('action', '/')" class="btn btn-dark btn-lg font-weight-light">/</button>
              <button type="button" onclick="calculate('action', '*')" class="btn btn-dark btn-lg font-weight-light">x</button>
            </div>
            <div class="row">
              <button type="button" onclick="calculate('value', 7)" class="btn btn-dark btn-lg font-weight-light">7</button>
              <button type="button" onclick="calculate('value', 8)" class="btn btn-dark btn-lg font-weight-light">8</button>
              <button type="button" onclick="calculate('value', 9)" class="btn btn-dark btn-lg font-weight-light">9</button>
              <button type="button" onclick="calculate('action', '-')" class="btn btn-dark btn-lg font-weight-light">-</button>
            </div>
            <div class="row">
              <button type="button" onclick="calculate('value', 4)" class="btn btn-dark btn-lg font-weight-light">4</button>
              <button type="button" onclick="calculate('value', 5)" class="btn btn-dark btn-lg font-weight-light">5</button>
              <button type="button" onclick="calculate('value', 6)" class="btn btn-dark btn-lg font-weight-light">6</button>
              <button type="button" onclick="calculate('action', '+')" class="btn btn-dark btn-lg font-weight-light">+</button>
            </div>
            <div class="row">
              <button type="button" onclick="calculate('value', 1)" class="btn btn-dark btn-lg font-weight-light">1</button>
              <button type="button" onclick="calculate('value', 2)" class="btn btn-dark btn-lg font-weight-light">2</button>
              <button type="button" onclick="calculate('value', 3)" class="btn btn-dark btn-lg font-weight-light">3</button>
              <button type="button" onclick="calculate('action', '=')" class="btn btn-dark btn-lg enter">=</button>
            </div>
            <div class="row" style="margin-top: -60px">
              <button type="button" onclick="calculate('value', 0)" class="btn btn-dark zero btn-lg font-weight-light">0</button>
              <button type="button" onclick="calculate('action', '.')" class="btn btn-dark btn-lg font-weight-light">.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="calculator.js"></script>
  </body>	
</html>
