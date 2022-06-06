// const variable: type = value

const greeting: string = "Hello World!";

const year: number = 2021

const addTwoNumbers = (a: number, b:number): number => a + b

interface User {
    id: string;
    name: string;
}

interface Book {
    id: string;
    name: string;
    releaseDate?: Date;
}

const getUserById = (id: string): User => ({
    id,
    name: 'Danny Freeman',
})

const getBookById = (id: string): Book => ({
    id,
    name: 'TypeScript 101',
})

const user = getUserById('user-1')
const book = getBookById('book-1')

const saveUser = (user: User) => console.log('saving user', {
    prop1: user.id,
    prop2: user.name
})

const saveBook = (book: Book) => console.log('saving book', {
    prop1: book.id,
    prop2: book.name,
    prop3: book.releaseDate?.toISOString()
})

saveUser(book)
saveBook(book)