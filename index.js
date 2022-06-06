// const variable: type = value
var greeting = "Hello World!";
var year = 2021;
var addTwoNumbers = function (a, b) { return a + b; };
var getUserById = function (id) { return ({
    id: id,
    name: 'Danny Freeman'
}); };
var getBookById = function (id) { return ({
    id: id,
    name: 'TypeScript 101'
}); };
var user = getUserById('uuid-1');
var book = getBookById('uuid-1');
var saveUser = function (user) { return console.log('saving user', { user: user }); };
var saveBook = function (book) { return console.log('saving book', { book: book }); };
saveUser(book);
saveBook(book);
