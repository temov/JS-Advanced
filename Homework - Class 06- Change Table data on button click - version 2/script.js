



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
let pageNum = 1;

button.addEventListener('click', () =>{

    fetch('https://swapi.dev/api/planets/?page=' + pageNum)
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
        datasRow.innerHTML = `<td style ='border:1px solid black';>${planets.results[i].name}</td><td style ='border:1px solid black';>${planets.results[i].climate}</td><td style ='border:1px solid black';>${planets.results[i].gravity}</td><td style ='border:1px solid black';>${planets.results[i].population}</td>`;
        table.appendChild(datasRow);
        
        
        }
        let button2 = document.createElement('button');
        button2.id = 'btn_2';
        button2.innerHTML = 'Next 10';
        button.after(button2);
        button.style.display = 'none';
        

        button2.addEventListener('click', () =>{
            if (pageNum >=1){
                pageNum++;

            fetch('https://swapi.dev/api/planets/?page='+pageNum)
            .then(function(res){
        
                return res.json();
                
            })
            .then(function(data){
                console.log('Data:',data);
                getNextTen(data);
                
        
            })
            .catch(function(error){
        
                console.log('error:', error);
            })
        }
    
        })
        
    
    }

    function getNextTen(data){

       
        let planets  = data;

        let btn_2 = document.getElementById('btn_2');
       

        for (let i = 0; i < planets.results.length; i++) {
    
               let tr = document.querySelectorAll('tr');


                tr[i+1].innerHTML = `<td style ='border:1px solid black', color:'red';>${planets.results[i].name}</td><td style ='border:1px solid black';>${planets.results[i].climate}</td><td style ='border:1px solid black';>${planets.results[i].gravity}</td><td style ='border:1px solid black';>${planets.results[i].population}</td>`;
        
    
            }

            let button3 = document.createElement('button');
            button3.innerHTML = 'Previous 10';
            button3.id = 'btn_3';
            btn_2.after(button3);
            


            button3.addEventListener('click', () =>{

                fetch('https://swapi.dev/api/planets/?page='+pageNum)
                .then(function(res){
            
                    return res.json();
                    
                })
                .then(function(data){
                    console.log('Data:',data);
                    getPrevTen(data);
                    
            
                })
                .catch(function(error){
            
                    console.log('error:', error);
                })
        
        
            })


    }

    function getPrevTen(data){

        if(pageNum >=1){

            pageNum--

        let planets  = data;
        let btn_3 = document.getElementById('btn_3');


        for (let i = 0; i < planets.results.length; i++) {
    
               let tr = document.querySelectorAll('tr');


                tr[i+1].innerHTML = `<td style ='border:1px solid black', color:'red';>${planets.results[i].name}</td><td style ='border:1px solid black';>${planets.results[i].climate}</td><td style ='border:1px solid black';>${planets.results[i].gravity}</td><td style ='border:1px solid black';>${planets.results[i].population}</td>`;
        
    
            }
            btn_2.style.display = 'block';
            btn_3.style.display = 'none';

            
            
        }
        
    }
    