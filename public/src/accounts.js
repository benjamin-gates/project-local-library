// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// The below function returns the account object that has the matching ID
function findAccountById(accounts, id) {
  // Use find method to find the single account with the matching ID
  const matchingAccount = accounts.find((account) => account.id === id);
  return matchingAccount;
}

// The below function returns a sorted array of objects, accounts, alphabetically by last name
function sortAccountsByLastName(accounts) {
  // Use sort to sort by last name
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts;
}

// The below function takes in an account object and array of book objects. It returns a number that represents
// the total amount of times the account's ID appears in any books 'borrow' array
function getTotalNumberOfBorrows(account, books) {
  // Map books array of object to only include array of borrows
  const bookArr = [];
  for (let bookNum = 0; bookNum < books.length; bookNum++){
    const borrowsArr = books[bookNum].borrows;
    for (let borrowNum = 0; borrowNum < borrowsArr.length; borrowNum++){
      bookArr.push(borrowsArr[borrowNum].id);
    }
  }

  // Filter borrows to array that only includes borrowed books with account id in their borrowed
  const matchingBorrowed = bookArr.filter((borrowId) => borrowId === account.id);
  
  // Return length of array
  return matchingBorrowed.length;
}


function getBooksPossessedByAccount(account, books, authors) {
 
  // Get all books with borrows id matching account id (filter)
  const accountBooks = books.filter((book) => book.borrows[0].id === account.id);

  // Filter books to those that have not been returned
  const notReturned = accountBooks.filter((book) => book.borrows[0].returned === false);

  // Collect book objects into new array, embedding author objects into each
  const authorInBooks = notReturned.reduce((acc, book) => {
    const bookObject = {...book};
    bookObject.author = authors.find((author) => author.id === book.authorId);
    acc.push(bookObject);
    return acc;
  }, []);

  return authorInBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
