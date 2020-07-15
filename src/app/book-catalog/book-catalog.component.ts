import { Component, OnInit } from '@angular/core';
import { BookInfoService } from '../book-info.service';
import { BookInfo } from '../dto/book-info';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  books: BookInfo[];

  constructor(private bookInfoService: BookInfoService) { }

  getBooks(): void {
    this.bookInfoService.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.getBooks();
  }

}
