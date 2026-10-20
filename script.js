(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {

            answer.style.marginLeft = 'auto';
            answer.style.marginRight = 'auto';

            let html = '<table style = "border-collapse: collapse;">';
            array.forEach(element => {
                html += '<tr><th style = "border: 1px solid black; background-color: red">' + element.title +
                    '</th><td style = "border: 1px solid black; background-color: green">' + element.body + '</td></tr>';
            });

            html += '</table>';
            answer.innerHTML = html;
      })
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
