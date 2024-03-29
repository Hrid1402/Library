console.log("Working...")
const addBtn = document.querySelector("#addbtn");
const closeBtn = document.querySelector("#closeModalbtn");
const addMyBookBtn = document.querySelector("#addMyBookBtn");
let number = 0;
//books things
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

const dialog = document.querySelector("#dialog");

//
const myLibrary = [];
const allBooks = document.querySelector("#content");


addBtn.addEventListener("click",() =>{
    dialog.showModal();
    console.log("click me babe");
});

closeBtn.addEventListener("click",() =>{
    dialog.close();
});


//Example books
myLibrary.push(new Book("Don Quixote", "Miguel de Cervantes", 1072));
addBookToLibrary();

myLibrary.push(new Book("Moby Dick", "Herman Melville", 427));
addBookToLibrary();

//
addMyBookBtn.addEventListener("click",() =>{
    console.log(title.validity.tooLong);
    if(title.validity.valueMissing){
        alert("Title is empty");
    }else if(author.validity.valueMissing){
        alert("Author is empty");
    }else if(pages.validity.valueMissing){
        alert("Numberof pages  is empty");
    }else {
        //createObject
        console.log("Book:")
        myLibrary.push(new Book(title.value, author.value, pages.value));
        console.log("Library:")
        console.log(myLibrary)
        addBookToLibrary();
        dialog.close();

    }
    
});



function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ogNumber = number + 1;
}



function addBookToLibrary() {
    //book-block
    const bookBlock = document.createElement("div"); 
    const xBTN = document.createElement("button");
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const h1 = document.createElement("h1");
    const bookIMG = document.createElement("img");
    const textsBlock = document.createElement("div"); 
    const line = document.createElement("div"); 
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const reading = document.createElement("p");
    const ogNumber = number + 1;

    number = ogNumber;
    //xbutton
    xBTN.addEventListener("click",() => {
        const books = document.querySelectorAll(".book-block");
        console.log(ogNumber);
        myLibrary.forEach(book=> {
            if(book.ogNumber == ogNumber){
                console.log(book.title);
                let index = myLibrary.indexOf(book);
                myLibrary.splice(index, 1)
                while (books[index].firstChild) {
                    books[index].removeChild(books[index].firstChild);
                }
                console.log(myLibrary);
                books[index].remove();
            }
        });

    });

    //
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("width", "24");
    svgElement.setAttribute("height", "24");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("style", "fill: rgba(197, 166, 121, 1); transform: scaleY(-1); msFilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);");

    const svgElement2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement2.setAttribute("width", "24");
    svgElement2.setAttribute("height", "24");
    svgElement2.setAttribute("viewBox", "0 0 24 24");
    svgElement2.setAttribute("style", "fill: rgba(0, 0, 0, 1);");

    const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement2.setAttribute("d", "M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z");

    svgElement2.appendChild(pathElement2);

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z");
    svgElement.appendChild(pathElement);
    h1.classList.add("title");
    bookIMG.setAttribute("src", "images/bookImg.png");
    bookIMG.setAttribute("alt", "book-image");
    bookBlock.classList.add("book-block");
    textsBlock.classList.add("texts");
    line.classList.add("line");
    author.classList.add("author");
    pages.classList.add("pages");
    input.setAttribute("type","checkbox");

    h1.textContent = myLibrary[myLibrary.length - 1].title;
    author.textContent = "By " + myLibrary[myLibrary.length - 1].author;
    pages.textContent = "Pages: " + myLibrary[myLibrary.length - 1].pages.toString();
    reading.textContent = "Reading"
    xBTN.appendChild(svgElement);

    bookBlock.appendChild(xBTN);
    bookBlock.appendChild(h1);
    bookBlock.appendChild(bookIMG);
    bookBlock.appendChild(textsBlock);
    textsBlock.appendChild(line);
    textsBlock.appendChild(author);
    textsBlock.appendChild(pages);
    textsBlock.appendChild(label);

    label.appendChild(input);
    label.appendChild(svgElement2);
    label.appendChild(reading);


    allBooks.appendChild(bookBlock);
    console.log(myLibrary);
}