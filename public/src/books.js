// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Finds the author that matches the given id
function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const partitionedBooks = [[],[]];
  partitionedBooks[0] = books.filter((book) => book.borrows[0].returned === false);
  partitionedBooks[1] = books.filter((book) => book.borrows[0].returned === true);
  return partitionedBooks;
}

function getBorrowersForBook(book, accounts) {
  const getBookBorrows = book => book.borrows;
  const bookBorrows = getBookBorrows(book);
  //bookBorrows.length === ; 
  const matchingAccounts = [];
  for (let borrowNum = 0; borrowNum < bookBorrows.length; borrowNum++){
    //bookBorrows.push(book.borrows[borrowNum]);
    const borrowId = bookBorrows[borrowNum].id;
    const rightAccount = accounts.find((account) => account.id === borrowId);
    matchingAccounts.push(rightAccount);
  }
  const borrowsWithAccount = bookBorrows.reduce((acc, borrow, index) => {
    if (acc.length === 10) return acc;
    const borrowObject = {...borrow, ...matchingAccounts[index]};
    acc.push(borrowObject);
    return acc;
  }, []);
  return borrowsWithAccount;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
