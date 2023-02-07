async function searchMov(){
    const movieS = document.querySelector("#search").value;
    const response = await fetch(`www.omdbapi.com/?t=${movieS}&i=tt3896198&apikey=7d6d2760`);
    const movie = await response.json();
    
    document.getElementById("#result").innerHTML+=
    `<h2>Name: ${movie.Title}</h2>
    <img src="${movie.Poster}" width="200">
    <p>Year: ${movie.Year}</p>
    <p>Info: ${movie.Plot}</p>
    <p>Released: ${movie.Released}</p>
    <p>Ratings: ${movie.Ratings}</p>`
}