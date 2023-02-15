import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  books?: Book[];

  constructor(private booksService: BooksService) {}

  public ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: Book[]) => {
      this.books = result.filter((x: Book) => x.isRentable === true);
    });
  }
}
