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
