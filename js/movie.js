//1 Obtener la queryString
let queryString = window.location.search;
console.log(queryString);

//2 Transformarla en un obejto literal
let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

//3 Obtener EL dato para completar el end point.
let id = queryObject.get('id'); //Cambie segun lo que tengo en la url
console.log(id);

let apiKey = "e3f1ae8bae04c04c63af7b6996decd02"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}` //Viene de la API de TMDB

fetch(url)
    .then(function(respuestas){
        return respuestas.json()
    })
    .then(function(data){
        //Aca operamos con los datos.
        console.log(data);
        let titulo = document.querySelector('h2');
        let poster = document.querySelector('img');
        let description = document.querySelector('.description');
        console.log(description);
        let releaseDate = document.querySelector('#release-date');
        let length = document.querySelector('.length');
        let votes = document.querySelector('#votes');

        titulo.innerText = data.title;
        poster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        description.innerText = data.overview;
        releaseDate.innerHTML += " " + data.release_date
        length.innerHTML += " " + data.runtime
        votes.innerHTML += " " + data.vote_average
      

    })
    .catch(function(error){
        console.log(error);
    })

