let button = document.querySelector('button'); // on récupère le bouton
let input = document.querySelector('#site-search'); // on récupère l'input
let listeFilm= document.getElementById('liste-film') // on récupérer la div id #info-film

button.addEventListener('click', (e) => {
  e.preventDefault();
  rechercheFilm = input.value // récupère le contenu inscrit l'utilisateur 

  starWars = "Star Wars"

  fetch(`https://www.omdbapi.com/?s=${starWars}&apikey=f6e256e1`) // récupère le contenu du site avec la valeur inscrit par l'utilisateur 
    .then(response => response.json())
    .then(films => {
      console.log(films)
      films.Search.forEach(film => {
        listeFilm.innerHTML+= `<div class="card" style="width: 18rem;">
        <img src="${film.Poster}" class="card-img-top" alt="affiche du film">
        <div class="card-body">
          <h5 class="card-title">${film.Title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      });
    })
});
