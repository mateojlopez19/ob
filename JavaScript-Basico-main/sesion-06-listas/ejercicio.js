let shoppingList = ["arroz", "pasta", "pan", "frijoles", "panela"];
console.log(shoppingList);

shoppingList.push("Aceite de Girasol");
console.log(shoppingList);

shoppingList.pop("Aceite de Girasol");
console.log(shoppingList);


/* Objetos y filtrados */
let date1 = new Date("1/09/77");
let date2 = new Date("4/1/12");
let date3 = new Date("11/1/01");
const favoritesMovies = [{
    title: "star wars",
    director: "george lucas",
    dateMovie: date1
},{
    title: "the avengers",
    director: "stan lee, joss whedon",
    dateMovie: date2
},{
    title: "fast and furious",
    director: "rob cohen",
    dateMovie: date3
}];
console.log(favoritesMovies);

//.filter date
let date4 = new Date("01/1/10");
let newMoviesFilter = favoritesMovies.filter(filter => filter.dateMovie > date4);
console.log(newMoviesFilter);

//.map director
let mapDirector = favoritesMovies.map(list => list.director);
console.log(mapDirector);

//.map movies
let mapMovies = favoritesMovies.map(list => list.title);
console.log(mapMovies);

//concat directors y titles
let concatTitlesAndDirectors = mapDirector.concat(mapMovies);
console.log(concatTitlesAndDirectors);

//spread operator director and title
let spreadTitlesAndDirectors = [...mapDirector, ...mapMovies];
console.log(spreadTitlesAndDirectors);