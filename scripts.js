
const myLibrary = [];
let bookID = 0

function Book(id,title,author,pages,read){
    // the constructor
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        strRead = ""
        if(read=="yes"){
            strRead = "already read";
        } else {
            strRead = "not read yet";
        }
        console.log(this.title+" by "+this.author+", "+this.pages+" pages, "+ strRead);
    };
}

function addBookToLibrary(){
    // do stuff here
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name="book_read"]:checked').value;
    const book = new Book(bookID,title,author,pages,read);

    myLibrary.push(book);
    updateLibrary(bookID);
    bookID++;
}

function deleteBook(bookid){
    const deleteBookBtn = document.getElementById(bookid.id);
    deleteBookBtn.remove();
}

function updateLibrary(idNum){
    const shelf = document.querySelector(".shelf");
    const displayBook = document.createElement('div');
    displayBook.className="book";
    displayBook.id = 'id'+idNum;
    alert(displayBook.id);
    displayBook.innerHTML="<span class='title'>"+myLibrary[idNum].title+"</span><br/>Author: "+myLibrary[idNum].author+"</span><br/>Pages: "+myLibrary[idNum].pages+"</span><br/>Read?: "+myLibrary[idNum].read+"<br/><button class='remove' onClick='deleteBook("+(displayBook.id)+")'>Delete</button>";
    shelf.append(displayBook);
}

const addBookBtn = document.getElementById("addBook");
addBookBtn.addEventListener("click",(event)=>{
    addBookToLibrary();
});


