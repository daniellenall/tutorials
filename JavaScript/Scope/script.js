var movies = [
  {
    title: "In Bruges",
    hasWatched: false,
    rating: 5
  },
  {
    title: "Frozen",
    hasWatched: true,
    rating: 4.5
  },
  {
    title: "Pokemon 2000",
    hasWatched: true,
    rating: 4
  }
]

movies.forEach (function(movie) {
    var result = "You have ";
    if(movie.hasWatched){
      result += "watched ";
    }    else {
      result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})
