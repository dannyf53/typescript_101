"use strict";
const greeting = "Hello World!";
const year = 2021;
const addTwoNumbers = (a, b) => a + b;
const getUserById = (id) => ({
    id,
    name: 'Danny Freeman',
});
const getBookById = (id) => ({
    id,
    name: 'TypeScript 101',
});
const user = getUserById('uuid-1');
const book = getBookById('uuid-1');
const saveUser = (user) => console.log('saving user', { user });
const saveBook = (book) => console.log('saving book', { book });
saveUser(book);
saveBook(book);
//# sourceMappingURL=index.js.map