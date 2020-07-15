import { Injectable } from '@angular/core';
import { BookInfo } from './dto/book-info';
import { BOOKS } from './test-data/mock-book-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {

  constructor() { }

  getBooks(): Observable<BookInfo[]> {
    return of(BOOKS);
  }
}
