// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) 
{
    let directorArray = []
    for(let i = 0; i < moviesArray.length; i++)
    {
        directorArray.push(moviesArray[i].director)
    }
    return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) 
{
    const tempArr = moviesArray.filter((item) => {
        return item.director === "Steven Spielberg" && item.genre.includes("Drama")
    })
    return tempArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let count = 0;
    const result = moviesArray.reduce((score, item) =>{
        if('score' in item && item.score !== undefined)
        {
            count++;
            return score + item.score
        }
        count++;
        return score
    }, 0)
    if(count === 0)
    {
        return 0;
    }
    return Number((result / count).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) 
{
    let count = 0;
    const dramaScore = moviesArray.reduce((total, item) =>{
        if(item.genre.includes("Drama"))
        {
            if(item.score !== undefined)
            {
                count++;
                return total + item.score
            }
            return total
        }
        return total
    }, 0)
    if(count === 0)
    {
        return 0;
    }
    return Number((dramaScore / count).toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) 
{
    var sortedArr = [...moviesArray];
    sortedArr.sort((a, b) =>{
        if(a.year === b.year)
        {
            if(a.title > b.title)
            {
                return 1;
            }
            else if (a.title < b.title)
            {
                return -1
            }
        }
        return a.year - b.year
    })
    return sortedArr;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) 
{
    var sortedArr = [...moviesArray];
    sortedArr.sort((a, b) =>{
        if(a.title > b.title)
        {
            return 1;
        }
        else if(a.title < b.title)
        {
            return -1;
        }
    })
    let l = sortedArr.length;
    if(sortedArr.length > 20)
    {
        l = 20;
    }
    let rArr = []
    for(let i = 0; i < l; i++)
    {
        rArr.push(sortedArr[i].title)
    }
    return rArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
