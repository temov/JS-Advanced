

// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let starWarsBtn = document.getElementById('starWButton');

let personStats = ['Height', 'Birth_year', 'Eye_color', 'Hair_color'];

starWarsBtn.addEventListener('click', function(){

    let personName = document.createElement('h1');
    let container  = document.getElementById('container');
    container.appendChild(personName);
    let tableStats = document.createElement('table');
    container.appendChild(tableStats);
    let tableBody = document.createElement('tbody');
    tableStats.appendChild(tableBody);
    let row1 = document.createElement('tr');
    let row2 = document.createElement('tr');
    tableBody.appendChild(row1);
    tableBody.appendChild(row2);
  

    fetch('https://swapi.dev/api/people/1')
    .then(function(res){

        return res.json();
        
    })
    .then(function(data){
        console.log('Data:',data);

           makeTable(data,row1,row2,personName);
        

    })
    .catch(function(error){

        console.log('error:', error);
    })
    
})

function makeTable(data,row1,row2,personName){
    personName.innerText = data.name;
    row1.id = 'row_1';
    row2.id = 'row_2';
    row1.innerHTML += `<th>${personStats[0]}</th>`;
    row1.innerHTML += `<th>${personStats[1]}</th>`;
    row1.innerHTML += `<th>${personStats[2]}</th>`;
    row1.innerHTML += `<th>${personStats[3]}</th>`;
    row2.innerHTML += `<td>${data.height} cm</td>`;
    row2.innerHTML += `<td>${data.birth_year}</td>`;
    row2.innerHTML += `<td>${data.eye_color}</td>`;
    row2.innerHTML += `<td>${data.hair_color}</td>`;

}