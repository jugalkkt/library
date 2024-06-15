const myLibrary = [];

function Book(title, author, pages, hasRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead; 
}

function addBookToLibrary(event)
{
    event.preventDefault();

    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let pages = document.querySelector('input[name="pages"]').value;
    let hasRead = document.querySelector('input[name="hasRead"]:checked').value;
     
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    displayBooks();
}

document.querySelector('#form').addEventListener('submit',addBookToLibrary)

function displayBooks()
{
    let bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';

    myLibrary.forEach(
        (book, index) =>
            {
                let bookItem = document.createElement('div');
                bookItem.classList.add('book-item');
                bookItem.innerHTML = 
                    `<h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Read: ${book.hasRead ? "Yes" : "No"}</p>`
                bookList.appendChild(bookItem);
            }
    )
}