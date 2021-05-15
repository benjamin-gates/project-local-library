# Project - Local Library
This application displays all the relevant stats on a local library. The stats include the count of books in genres, stats on authors, and stats on specific books.

## Context for Project
The purpose of this project was for me to demonstrate my understanding of the different array methods of JavaScript, such as find, filter, reduce, sort, map, some, and every. I only wrote the JavaScript for this project, and nothing else.

## Technologies Used
- JavaScript

## Features
Below I will discuss the functionality I added with the JavaScript to each page in this project:
1. [Overall Stats](#overall-stats)
1. [Stats by Book](#stats-by-book)
1. [Stats by Author](#stats-by-author)

### Overall Stats
![Overall Stats Screenshot](/public/images/overallstats.jpg)
In this page, I mainly used a filter array methods to find then count the array of all books that match a certain criteria, such as being borrowed or a certain genre.
[Back to Features](#features)

### Stats by Book
![Stats by Book Screenshot](/public/images/statsbybook.jpg)
Here, I used a find array method to find the book object that matches a selected title, then used filter to find all the borrowers that borrowed the book
[Back to Features](#features)

### Stats by Author
![Stats by Author Screenshot](/public/images/statsbyauthor.jpg)
The JavaScript for this page uses the sort array method to sort authors by last name. The JavaScript also uses filter to find all borrows from the author and a find to find the account currently borrowing the book.
[Back to Features](#features)

## Learnings from this Project
This project solidified my understanding of JavaScript and how to access complicated data that includes objects within objects within objects.