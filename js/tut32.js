/*  Implementing  a library class exercise
    create a class library and implement the following:
    getBookList(),  define this ye run krne ke badd jitni bhi list hai vo aaje
    issueBook(bookname,username) ;  //kisko issue krni h
    return book(bookname);  //jo book name hai voremove hojega

    */
console.log('this is exercise tut 32');
class Library {
    constructor(books) {
        this.books = books;
    
    }
    getBookList() {
        console.log(this.books);
    }

    issueBook(bookname,user) {
        localStorage.setItem("user", bookname);
        console.log("bookissued");
    }
    returnBook(bookname, user) {
        localStorage.removeItem("user", bookname);
        console.log("bookRemoved");
    }
}
let book = new Library("abc,def,exy");
console.log(book.issueBook('abcd', 'arsh'));
console.log(book.returnBook("abcd", "arsh"));
