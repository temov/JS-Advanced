

let inputMovie = document.getElementById('movie');
let btn = document.getElementById('button');
let result = document.getElementById('result');


let movies = ['Topgun', 'Gladiator', 'Titanic', 'Heat', 'Sing'];

btn.addEventListener('click', function(){
    let h1 = document.createElement('h1');
    result.appendChild(h1);

    for(let i=0; i<movies.length;i++){
        
            if(inputMovie.value.toLowerCase() === movies[i].toLowerCase()){

                h1.innerHTML = 'The movie can be rented';
                h1.style.color = 'green';
                return result.innerHTML;
                
            }else{
                h1.innerHTML = 'The movie cant be rented';
                h1.style.color = 'red';
                
            }
         
    }
    
    inputMovie.value = '';
    
        
})