// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let directorsArr =  movies.map(function(singleMovie){
        return singleMovie.director
    })
    return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielbergDramas = movies.filter(element => {
        if(element.director == "Steven Spielberg" && element.genre.includes('Drama')) {
            return true;
        }
        
    })
    return spielbergDramas.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    let sum = movies.reduce((acc,element) => {
        if (element.rate) {
            return acc + element.rate
         } 
          else {
              return acc
    }},0)
        let average = sum/movies.length;
        return parseFloat(average.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function(movie) {
      if(movie.genre.includes ("Drama"))
      return true
  })
    let average = ratesAverage(dramaMovies)
    return average;
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 function OrderByYear(movies) {
   let clone = JSON.parse(JSON.stringify(movies))
    clone.sort(function(first,second){
       if (first.year > second.year) {
           return 1
       } 
       else if (second.year > first.year) {
           return -1
       } else{
           return 0
       }
   })
   return clone
 }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderALphabetically {
    let clone = JSON.parse(JSON.stringify(movies))
    clone.sort(function(first,second){
        if (first.title > second.title) {
            return 1
        } 
        else if (first.title < second.title) {
            return -1
        } else{
            return 0
        }
    })
    .map(eachMovie => eachMovie.title)
    .slice(0, 20);
    return clone
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

