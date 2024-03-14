class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI {
    // Existing methods...

    addBookToList(book) {
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete">X</a></td>
        `
        list.appendChild(row)

        // Store book in local storage
        this.storeBook(book);
    }



    showAlert(message,classN){
        const div = document.createElement('div')

        div.className = `alert ${classN}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')

        const form = document.querySelector('#book-form')

        container.insertBefore(div,form)

        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)

    }  
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }
    clearFields(){
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }
    storeBook(book) {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    
}


document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault()

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    const book = new Book(title, author, isbn)

    // console.log(book);

    const ui = new UI()

    if(title === '' || author === '' || isbn === '') {

        ui.showAlert('Popuni sva polja', 'error')
    } else {
        ui.addBookToList(book)
        ui.clearFields()
        ui.showAlert('Uspesno ste uneli knjigu', 'success')


    }

    

})

document.getElementById('book-list').addEventListener('click', e => {
    console.log(e.target);

    const ui = new UI()
    ui.deleteBook(e.target)
    ui.showAlert('Uspesno ste obrisali knjigu', 'success')
})



