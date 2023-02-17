import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { BooksService } from 'src/app/shared/services/books.service';
import { FormControl } from '@angular/forms';
import { Categories } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
  books?: Book[];
  categories!: Categories[];

  selectFormControl = new FormControl('');

  constructor(private booksService: BooksService) {}

  public ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: Book[]) => {
      this.books = result.filter((x: Book) => x.isRentable === false);
    });

    this.booksService.getCategories().subscribe((response: Categories[]) => {
      this.categories = response;
    });

    this.selectFormControl.valueChanges.subscribe((selectedValue: string | null) => {
      this.booksService.getBooks().subscribe((result: Book[]) => {
        this.books = result.filter((x: Book) => x.isRentable === false && x.categoryName === selectedValue);
      });
    });
  }

  public rentBook(bookId: number): void {}
}
