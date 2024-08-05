class book {
    constructor(title, _author, _pric, _rentalPrice, _copiesAvailable) {
        this.title = title;
        this.author = _author;
        this.pric = _pric;
        this.rentalPrice = _rentalPrice;
        this.copiesAvailable = _copiesAvailable;
    }
   getauthor(){
    return this.author;
   }
  setersauthor(){
    this.author = author;
    return this;
  }
  getpric(){
    return this.pric;
  }
  setpric(){
    this.pric = pric;
    return this;
  }
  getrentalPrice(){
    return this.rentalPrice;
  }
  setrentalPrice(){
    this.rentalPrice = rentalPrice;
    return this;
  }
  getcopiesAvailable(){
    return this.copiesAvailable;
  }
  setcopiesAvailable(){
    this.copiesAvailable = copiesAvailable;
    return this;
  }
  getDetails(){
    return `Title: ${this.title}, Author: ${this.author}, Price: $${this.pric}, Rental Price: $${this.rentalPrice}, Copies Available: ${this.copiesAvailable}`;
  }
  rentBook(numBooks){
    if(numBooks <= this.copiesAvailable){
      this.copiesAvailable -= numBooks;
      return `You have rented ${numBooks} books. Remaining copies: ${this.copiesAvailable}`;
    }else{
      return "Insufficient copies available!";
    }
}
   book;
  }
  const book1 = new book("To Kill a Mockingbird", "Harper Lee", 1960, 12, 100);
  console.log(book1.getDetails());
  book1.rentBook(50);
  console.log(book1.getDetails());
  book1.setauthor("J.D. Salinger").setpric(20).setrentalPrice(15).setcopiesAvailable(50);
  console.log(book1.getDetails());
