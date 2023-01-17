

let inputMovie = document.getElementById('movie');
let btn = document.getElementById('button');
let result = document.getElementById('result');



btn.addEventListener('click', function(){
    let movies = ['Topgun', 'Gladiator', 'Titanic', 'Heat', 'Sing'];

    for(let i=0; i<movies.length;i++){

            if(inputMovie.value.toLowercase() === movies[i].toLowerCase()){

                let h1 = document.createElement('h1');
                h1.innerHTML = 'The movie can be rented';
                h1.style.color = 'green';
                result.appendChild(h1);

            }else if (inputMovie.value.toLowercase() !== movies[i].toLowerCase()){

                let h1 = document.createElement('h1');
                h1.innerHTML = 'The movie cant be rented';
                h1.style.color = 'red';
                result.appendChild(h1);
            }
       else if (inputMovie.value.toLowerCase() === ''){
                let h1 = document.createElement('h1');
                h1.innerHTML = 'Please enter movie Title';
                result.appendChild(h1);
        }
    }
    

})