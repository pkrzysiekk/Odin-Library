const myLibrary=[];
const main=document.querySelector("main");
const dialog=document.querySelector(".dialog");
const addButton=document.querySelector(".Add")
const submitButton=document.querySelector("#submitButton");
const form=document.querySelector("form");
let i=0;

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  addBookToLibrary();
  clearMain();
  displayBooks();
  clearDialog();
  dialog.close();
});

addButton.addEventListener("click",()=>{
  dialog.showModal();
});
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
  const title=form.elements['BookN'].value;
  const author=form.elements['BookA'].value;
  const pages=form.elements['BookP'].value;
  let isRead=false;
  if(form.elements['Read'].checked){
    isRead=true;
  }
  book=new Book(title,author,pages,isRead);
  myLibrary.push(book);
}
function clearDialog(){
  form.elements['BookN'].value='';
  form.elements['BookA'].value='';
  form.elements['BookP'].value='';
  form.elements['Read'].checked=false;
}

theHobbit=new Book('The Hobbit','J.R.R. Tolkien','295',true);
for(let j=0;j<10;j++){
  myLibrary.push(theHobbit);
}

function displayBooks(){
 i=0;
  myLibrary.forEach((book)=>{
  let bookCard =document.createElement("div");
  let bookSpan =document.createElement("span");
  let deleteButton=document.createElement("button")
  deleteButton.classList.add("delete");
  deleteButton.innerText="Delete";
  bookCard.classList.add('card');
  bookCard.setAttribute("id",i);
  i++;
  bookSpan.textContent=book.info();
  bookCard.appendChild(bookSpan);
  bookCard.appendChild(deleteButton);
  deleteButton.addEventListener("click",(e)=>{
    let index=bookCard.id;
    myLibrary.splice(index,1);
    bookCard.remove();
    
  })
  main.appendChild(bookCard);
  
  })
}

function clearMain(){
  main.innerHTML='';
}


displayBooks();

