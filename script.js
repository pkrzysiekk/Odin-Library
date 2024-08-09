const myLibrary=[];
const main=document.querySelector("main");
function Book(title,author,numOfPages,isRead){
    this.title=title;
    this.author=author;
    this.numOfPages=numOfPages;
    this.isRead=isRead;
    
}
Book.prototype.info=function(){
  return `${this.title} by ${this.author}, ${this.numOfPages} pages 
  ${this.isRead ? 'already read':'not yet read'}`;
}
function addBookToLibrary(){

}

theHobbit=new Book('The Hobbit','J.R.R. Tolkien','295',true);
myLibrary.push(theHobbit);
function displayBooks(){
  let i=0;
  myLibrary.forEach((book)=>{
  let bookCard =document.createElement("div");
  let bookSpan =document.createElement("span");
  bookCard.classList.add('card');
  bookCard.setAttribute("id",i);
  i++;
  bookSpan.textContent=book.info();
  bookCard.appendChild(bookSpan);
  main.appendChild(bookCard);
  
  })
}

displayBooks();

