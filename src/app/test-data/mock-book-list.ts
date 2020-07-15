import { BookInfo } from '../dto/book-info';

export const BOOKS: BookInfo[] = [
  {
    isbn: '9780062225740',
    title: 'Pyramids',
    openLibraryUrl: 'http://openlibrary.org/books/OL27566628M/Pyramids',
    numberOfPages: 368,
    coverImageUrl: 'https://covers.openlibrary.org/b/id/9021696-M.jpg',
    publishDate: 'Apr 30, 2013',
    authors: [
        {
            openLibraryUrl: 'http://openlibrary.org/authors/OL25712A/Terry_Pratchett',
            name: 'Terry Pratchett'
        }
    ]
  }
];
