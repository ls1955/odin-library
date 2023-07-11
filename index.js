function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

Book.prototype.info = function() {
    let readMessage = this.hasRead ? "has read" : "not read yet"
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`
}

const library = []
const booksContainer = document.querySelector(".books-container")

function addBookToLibrary(book) {
    library.push(book)
}

function showBooks() {
    booksContainer.innerHTML = ""

    library.forEach(book => {
        const bookCard = document.createElement("div")
        bookCard.innerText = book.info()
        booksContainer.insertAdjacentElement("beforeend", bookCard)
    })
}

let bookOne = new Book("Programming Ruby", "Dave Thomas", "111", true)
let bookTwo = new Book("Refactoring", "Martin Fowler", 700, false)
let bookThree = new Book("The Rails way", "Obie Femandez", 1000, false)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)
addBookToLibrary(bookThree)

showBooks()
