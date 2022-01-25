let task_container = document.querySelector(".task_container");
let books = document.querySelector(".books");

class Book {
  constructor(title, author, release_date) {
    this.title = title;
    this.author = author;
    this.release_date = release_date;

    let bookNewDetail = document.createElement("div");
    bookNewDetail.classList.add("bookNewDetail");

    let newTitle = document.createElement("span");
    let newAuthor = document.createElement("span");
    let newDate = document.createElement("span");

    newTitle.innerText = title;
    newAuthor.innerText = author;
    newDate.innerText = release_date;

    bookNewDetail.append(newTitle);
    bookNewDetail.append(newAuthor);
    bookNewDetail.append(newDate);
    books.append(bookNewDetail);
  }
}

const book1 = new Book("Harry Potter", "J K Rowling", 1993);
const book2 = new Book("Do or Die", "Anonymous", 2002);
const book3 = new Book("Honesty", "Anonymous", 2005);
const book4 = new Book("FullMeatl Alchemist", "Anonymous", 2012);
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
