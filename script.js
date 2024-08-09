const myLibrary=[];

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
console.log(theHobbit.info());
