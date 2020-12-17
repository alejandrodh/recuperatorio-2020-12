let apiKey = "e3f1ae8bae04c04c63af7b6996decd02"


//Actors trending

let url = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}` //Viene de la API de TMDB

fetch(url)
    .then(function (respuestas) {
        return respuestas.json()
    })
    .then(function (data) {
        //Aca operamos con los datos.
        console.log(data);

        let info = data.results //Esto es un array.
        let people = document.querySelector('#people');
        console.log(people);
        people.innerHTML = "";//Limpiamos el contenido que trae desde el html para que el contenedor quede vacío.

        for (let i = 0; i < 10; i++) {
            people.innerHTML += `<article class="single-card-people mb-4">
                                    <img src="https://image.tmdb.org/t/p/w235_and_h235_face${info[i].profile_path}" class="card-img-top" alt="...">
                                    <div class="cardBody">
                                        <h5 class="card-title">${info[i].name}</h5>
                                        <p class="card-text mb-0"><strong>Actividad:</strong> ${info[i].known_for_department}</p>
                                        <p class="card-text"><strong>Ranking popularidad:</strong> ${info[i].popularity}</p>
                                        <a href="people.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                    </div>
                                </article>`
        }

    })
    .catch(function (error) {
        console.log(error);
    })



//Popular Movies
let media = "movie";
let timeWindow = "week";
url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}` //Viene de la API de TMDB

fetch(url)
    .then(function (respuestas) {
        return respuestas.json()
    })
    .then(function (data) {
        //Aca operamos con los datos.
        console.log(data);

        let info = data.results //Esto es un array.
        let movies = document.querySelector('.movies');
        console.log(movies);
        movies.innerHTML = "";//Limpiamos el contenido que trae desde el html para que el contenedor quede vacío.

        for (let i = 0; i < 4; i++) {
            movies.innerHTML += `<article class="single-card-movie">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                    <div class="cardBody">
                                        <h5 class="card-title">${info[i].title}</h5>
                                        <p class="card-text">${info[i].overview}</p>
                                        <a href="movie.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                    </div>
                                </article>`
        }

    })
    .catch(function (error) {
        console.log(error);
    })


//Now Playing
url = `https://api.themoviedb.org/3/${media}/now_playing?api_key=${apiKey}` //Viene de la API de TMDB
fetch(url)
    .then(function (respuestas) {
        return respuestas.json()
    })
    .then(function (data) {
        //Aca operamos con los datos.
        console.log(data);

        let info = data.results //Esto es un array.
        let movies = document.querySelector('#now-playing');
        console.log(movies);
        movies.innerHTML = "";//Limpiamos el contenido que trae desde el html para que el contenedor quede vacío.

        for (let i = 0; i < 6; i++) {
            movies.innerHTML += `<article class="single-card-playing">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                    <div class="cardBody">
                                        <h5 class="card-title">${info[i].title}</h5>
                                        <p class="card-text">${info[i].overview}</p>
                                        <a href="movie.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                    </div>
                                </article>`
        }

    })
    .catch(function (error) {
        console.log(error);
    })



//Popular tv shows
media = "tv";
url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}` //Viene de la API de TMDB
fetch(url)
    .then(function (respuestas) {
        return respuestas.json()
    })
    .then(function (data) {
        //Aca operamos con los datos.
        console.log(data);

        let info = data.results //Esto es un array.
        let movies = document.querySelector('.tv-show');
        console.log(movies);
        movies.innerHTML = "";//Limpiamos el contenido que trae desde el html para que el contenedor quede vacío.

        for (let i = 0; i < 5; i++) {
            movies.innerHTML += `<article class="single-card-tv">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                    <div class="cardBody">
                                        <h5 class="card-title">${info[i].name}</h5>
                                        <p class="card-text">${info[i].overview}</p>
                                        <a href="serie.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                    </div>
                                </article>`
        }

    })
    .catch(function (error) {
        console.log(error);
    })


//tv show airing today
url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}` //Viene de la API de TMDB
fetch(url)
    .then(function (respuestas) {
        return respuestas.json()
    })
    .then(function (data) {
        //Aca operamos con los datos.
        console.log(data);

        let info = data.results //Esto es un array.
        let movies = document.querySelector('#on-air-today');
        console.log(movies);
        movies.innerHTML = "";//Limpiamos el contenido que trae desde el html para que el contenedor quede vacío.

        for (let i = 0; i < 12; i++) {
            movies.innerHTML += `<article class="single-card-on-air mb-3">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" class="card-img-top" alt="...">
                                    <div class="cardBody">
                                        <h5 class="card-title">${info[i].name}</h5>
                                        <p class="card-text">${info[i].overview}</p>
                                        <a href="serie.html?id=${info[i].id}" class="btn btn-primary">Ver más</a>
                                    </div>
                                </article>`
        }

    })
    .catch(function (error) {
        console.log(error);
    })

