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

const bookTitleInput = document.querySelector('input[name="book-title"]')
const bookAuthorInput = document.querySelector('input[name="book-author"]')
const bookPagesInput = document.querySelector('input[name="book-pages"]')
const bookHasReadInput = document.querySelector('input[name="book-has-read"]')
const addBookBtn = document.querySelector('button[type="submit"]')

addBookBtn.addEventListener("click", e => {
    e.preventDefault()

    let book = new Book(bookTitleInput.value, bookAuthorInput.value,
                        bookPagesInput.value, bookHasReadInput.checked)

    // Reset inputs field
    bookTitleInput.value = ""
    bookAuthorInput.value = ""
    bookPagesInput.value = ""
    bookHasReadInput.checked = false

    addBookToLibrary(book)

    // Refresh the page
    showBooks()
})

// Main driver script
let bookOne = new Book("Programming Ruby", "Dave Thomas", 111, true)
let bookTwo = new Book("Refactoring", "Martin Fowler", 700, false)
let bookThree = new Book("The Rails way", "Obie Femandez", 1000, false)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)
addBookToLibrary(bookThree)

showBooks()
