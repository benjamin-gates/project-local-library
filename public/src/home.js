// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Returns total number of books in given array
function getTotalBooksCount(books) {
  return books.length;
}

// Returns total number of accounts in given array
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// Returns total number of books in given array
function getBooksBorrowedCount(books) {
  // Filter books array to include only those that have 'false' in returned for their first borrow
  const checkedOutBooks = books.filter((book) => book.borrows[0].returned === false);

  // Use getTotalBooksCount to return total amount of filtered books
  return getTotalBooksCount(checkedOutBooks);
}

function getMostCommonGenres(books) {
  // Take in genres only
  const genres = books.map((book) => book.genre);

  // Get count of each genre
  const genreCount = {};
  genres.forEach((genre) => {
    genreCount[genre] = genreCount[genre] ? genreCount[genre] + 1 : 1;
  });

  // Create Array of Most Common Genres
  const mostCommonGenres = genres.reduce((acc, genre, index) =>{
    if (acc[index] === genre) {
      return acc;
    } else if (acc.length === 5) return acc;
    const genreObject = {
      'name': genre,
      'count': genreCount[genre]
    }
    acc.push(genreObject);
    return acc;
  }, []);

  mostCommonGenres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);
  return mostCommonGenres;
}
/*Helper function for getMostPopularBooks and getMostPopularAuthors
takes in books array and returns books array that includes count key
and is sorted from greatest count to least*/
function addCountandSortBooks(books) {
  books.forEach((book) => {
    const count = book.borrows.length;
    book['count'] = count;
  });
  books.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  return books;
}

function getMostPopularBooks(books) {
  const booksWithCount = addCountandSortBooks(books);

  const mostPopularBooks = booksWithCount.reduce((acc, book) => {
    if (acc.length === 5) return acc;
    const bookObject = {
      'name': book.title,
      'count': book.count
    }
    acc.push(bookObject);
    return acc;
  },[]);

  return mostPopularBooks;
}

function getMostPopularAuthors(books, authors) {
  const booksWithCount = addCountandSortBooks(books);
  /*const combinedCount = booksWithCount.reduce((acc, book) => {

  })*/
  //console.log(booksWithCount);
  const combinedBorrows = {};
  booksWithCount.forEach((book) => {
    const author = book.authorId;
    if (combinedBorrows[author]) {
      combinedBorrows[author]= combinedBorrows[author] + book.count;
      //book.count = combinedBorrows[author];
    } else {
      combinedBorrows[author] = book.count;
      //book.count = combinedBorrows[author];
    }
  });
// Get array of authorids in combined borrows object
const authorIds = Object.keys(combinedBorrows);

// Get array of borrows counts in combined borrows object
const totalCounts = Object.values(combinedBorrows);

// Create array of authorids and count
const combinedBorrowsArr = [];
for (let author = 0; author < authorIds.length; author++){
  borrowObject = {
    'authorId': authorIds[author],
    'count': totalCounts[author]
  }
  combinedBorrowsArr.push(borrowObject);
 }

  // Sort combinedBorrowsArr by count from greatest to least
  combinedBorrowsArr.sort((bookA, bookB) => bookB.count - bookA.count);

  // Create array with author name and count
  const mostPopularAuthors = combinedBorrowsArr.reduce((acc, book) => {
    if (acc.length === 5) return acc;
    const matchingAuthor = authors.find((author)=> author.id == book.authorId);
    const authorObject = {
      'name' : `${matchingAuthor.name.first} ${matchingAuthor.name.last}`,
      'count' : book.count
    }
    acc.push(authorObject);
    return acc;
  }, []);

  return mostPopularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
