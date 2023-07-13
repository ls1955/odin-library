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

    // Show books in booksContainer
    library.forEach((book, index) => {
        const bookCard = document.createElement("div")
        bookCard.innerText = book.info()

        const bookDeleteBtn = document.createElement("button")
        bookDeleteBtn.innerText = "Delete"
        bookDeleteBtn.classList.add("book-delete-button")
        bookDeleteBtn.dataset.bookIndex = index

        const bookHasReadToggleBtn = document.createElement("button")
        bookHasReadToggleBtn.innerText = book.hasRead ? "Unread" : "Read"
        bookHasReadToggleBtn.classList.add("book-has-read-toggle-button")
        bookHasReadToggleBtn.dataset.bookIndex = index

        booksContainer.insertAdjacentElement("beforeend", bookCard)
        booksContainer.insertAdjacentElement("beforeend", bookDeleteBtn)
        booksContainer.insertAdjacentElement("beforeend", bookHasReadToggleBtn)
    })

    // Refresh and redefine event listeners of book delete buttons
    let bookDeleteBtns = document.querySelectorAll(".book-delete-button")

    bookDeleteBtns.forEach (button => {
        button.addEventListener("click", () => {
            library.splice(button.dataset.bookIndex, 1)

            // Refresh the page
            showBooks()
        })
    })

    // Refresh and redefine event listeners of book has read toggle buttons
    let bookHasReadToggleBtns = document.querySelectorAll(".book-has-read-toggle-button")

    bookHasReadToggleBtns.forEach(button => {
        button.addEventListener("click", () => {
            let bookIndex = button.dataset.bookIndex

            library[bookIndex].hasRead = !library[bookIndex].hasRead

            // Refresh the page
            showBooks()
        })
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
