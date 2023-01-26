// Task 1
// 1. Create html element
// 2. Create script
// 3. Connect html with script
// 4. In html create empty table and a btn - Get planets (on click on btn you get the first 10 planets)
// *in the table, make headers with the names of the data: Name, Climate, Gravity, Population
// *every row should be filled with data from the objects 
// //In script
// 5. create function that will make an ajax call to the api url with page=1 //this function will return an array of objects (array of planets)
// 6. manipulate the array of planets 
// Task 2
// 1. After the user clicks the Get Planets btn and the table with data is loaded, show a new btn 'Next 10'
// 2. On click on 'Next 10' make a new ajax call with api url page=2
// 3. When you get next 10 planets, data in table should be changed
// 4. Next 10 btn should disapear and Previous 10 btn should appear
// *steps 2, 3, 4 should happen at the same time 
// 5. On click on 'Previous 10' show first 10 planets


table = document.getElementById('table');
let button = document.getElementById('btn');
let headers = ["Name", "Climate", "Gravity",'Population'];

button.addEventListener('click', () =>{

    fetch('https://swapi.dev/api/planets/?page=1')
    .then(function(res){

        return res.json();
        
    })
    .then(function(data){
        console.log('Data:',data);

         makeHeaders(table);
         makeDataRows(data,table);
        

    })
    .catch(function(error){

        console.log('error:', error);
    })
    
})

function makeHeaders(table){
    let headerRow = document.createElement("tr");

    for(let header of headers){

        let th = document.createElement('th'); 
        th.innerText = header;
        th.style.border = '1px solid black';
        headerRow.appendChild(th);
        table.appendChild(headerRow);  
    } 
    // data.forEach(element  => {
    //     let tr  = document.createElement('tr');
    //     tr.appendChild(`<td>${element.name}</td><td>${element.climate}</td><td>${element.gravity}</td><td>${element.population}</td>`)
    //     table.appendChild(tr);
        
    // });
    
}

function makeDataRows(data,table){

    let planets  = data;
    

    for (let i = 0; i < planets.results.length; i++) {

        let datasRow = document.createElement("tr");
        datasRow.style.color = 'blue';
        datasRow.innerHTML = `<td style ='border:1px solid black';>${data.results[i].name}</td><td style ='border:1px solid black';>${planets.results[i].climate}</td><td style ='border:1px solid black';>${planets.results[i].gravity}</td><td style ='border:1px solid black';>${planets.results[i].population}</td>`;
        table.appendChild(datasRow);
        
        
        }
        let button2 = document.createElement('button');
        button2.innerHTML = 'Next 10';
        button.after(button2);
        
        
    }


