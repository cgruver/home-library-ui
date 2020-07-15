import { Author } from './author';

export class BookInfo {
  isbn: string;
  title: string;
  openLibraryUrl: string;
  numberOfPages: number;
  coverImageUrl: string;
  publishDate: string;
  authors: Author[];
}
