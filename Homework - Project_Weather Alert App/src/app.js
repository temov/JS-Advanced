console.log('We are live and ready to make great app');

// Part 1:
// 1. Create a folder structure, add files, connect files
// - create a main folder for the project - weatherAlert folder
// - in the weatherAlert folder add the index.html file 
// - on the same level add the src folder
// - in the src folder add: app.js , style.css
// - in the src folder add an img folder that will house all the images for the project
// *connect the files: (local files should follow after bootstrap links/scripts)
// 2. Create the basic needed elements/content 
//     2.1. Create the Nav Bar
//         - image (logo)
//         - links (tabs) for each page
//     2.2. Pages (for now, add just a main title and a paragraph)
//         - WeatherAlert 
//         - Hourly Data 
//         - About WeatherAlert 
// 3. Make the tabs functional - on click on each tab, the content should change
//     - get the nav-links and pages elements in script
//     - create logic for hiding/showing pages
//     - when a tab is selected, add a style to that tab

// 4. Add input field and button
// - the user should be able to enter a city in the input field
// - on click on btn we should make a call to the weather api
// *steps
// - connect the btn to the script
// - create a function that will call the API
// - connect the function to the input value
// *let's look at the url


// 5. Add data to hourly weather page
// - create table 
// - fill table with data from api call
// *data we need:
// 1.Icon of weather - weather[0].icon
// 2.Description of weather - weather[0].description
// 3.Date and Time - dt_txt
// 4.Temperature - temp
// 5.Humidity - humidity
// 6.Wind Speed - wind.speed
// *how to get the icon
//     - get icon code from API
//     - add the code to the following link (dynamically)
//         http://openweathermap.org/img/w/ICON-CODE-HERE.png
//         example: http://openweathermap.org/img/w/10d.png
// *create an element img
// *set the img src to the url

tableData = document.getElementById('tableData');

let button = document.getElementById('btn');

let headings = ['weather icon','Description','Date and time', 'Temperature','Humidity','Wind speed'];

let cityInput = document.getElementById('city');


button.addEventListener('click',function(){

    if (cityInput.value === ''){

        tableData.style.display = 'none';
    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&units=metric&APPID=711af9823b458a3c9a3f57797af1e9bd`)
    .then(function(response){

        return response.json();
        
    })
    .then(function(data){

        makeHeadings(tableData);
        makeDataRows(data,tableData);
    })
    .catch(error=>console.log(error))
})

function makeHeadings(tableData){
    
tr  = document.createElement('tr');


    for(let i=0; i<headings.length;i++){
        let th  = document.createElement('th');

            th.innerHTML=`${headings[i]}`;
            th.style.border = '1px solid black';
            th.style.padding = '10px';
            th.style.textAlign = 'center';
            tr.appendChild(th);
            tableData.appendChild(tr);
    }

    th = '';
    
}

function makeDataRows(data,tableData){

        let cities  = data;
    
    for (let i = 0; i < cities.list.length; i++) {

        let tr = document.createElement("tr");
        tr.style.color = 'blue';
        tr.innerHTML = `<td style ='border:1px solid black; padding:10px; text-align:center;'><img src="http://openweathermap.org/img/w/${cities.list[i].weather[0].icon}.png"></td><td style ='border:1px solid black; padding:10px; text-align:center;'>${cities.list[i].weather[0].description}</td><td style ='border:1px solid black; padding:10px; text-align:center;'>${cities.list[i].dt_txt}</td><td style ='border:1px solid black; padding:10px; text-align:center;'>${cities.list[i].main.temp}</td><td style ='border:1px solid black; padding:10px;text-align:center;'>${cities.list[i].main.humidity}</td><td style ='border:1px solid black; padding:10px; text-align:center;'>${cities.list[i].wind.speed}</td>`;
        tableData.appendChild(tr);
        
        
        }

        tr ='';
    }


//Nav links 


let pages  = document.getElementsByClassName('page');
let navLink = document.getElementsByClassName('nav-link');
let userInput = document.getElementById('city');
let divElement = document.getElementById('pages');


 function clickLink (){

   
    for(let i=0; i<pages.length; i++){
       
        pages[i].style.display = 'none';
       
        
       navLink[i].addEventListener('click', function(){
        console.log(navLink);
         if (i === 0){
           
                pages[i].style.display = 'block';
                pages[i+1].style.display = 'none';
                pages[i+2].style.display = 'none';
                navLink[i].classList.add('active'); 
                navLink[i+1].classList.remove('active');
                navLink[i+2].classList.remove('active');
                
            }else if (i=== 1){
                pages[i].style.display = 'block';
                pages[i+1].style.display = 'none';
                pages[i-1].style.display = 'none';
                navLink[i].classList.add('active'); 
                navLink[i-1].classList.remove('active');
                navLink[i+1].classList.remove('active');
                 
                           }else if(i === 2){

                            pages[i].style.display = 'block';
                            pages[i-1].style.display = 'none';
                            pages[i-2].style.display = 'none';
                            navLink[i].classList.add('active'); 
                            navLink[i-1].classList.remove('active');
                           }
                        
        })        

    }

}

clickLink();