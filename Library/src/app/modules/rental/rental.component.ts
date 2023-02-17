import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { BooksService } from 'src/app/shared/services/books.service';
import { FormControl } from '@angular/forms';
import { Categories } from 'src/app/shared/models/categories.model';
import { EditModalComponent } from 'src/app/shared/components/edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
  books?: Book[];
  categories!: Categories[];

  isUserLogin: any;

  selectFormControl = new FormControl('');

  constructor(private booksService: BooksService, public dialog: MatDialog) {}

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

    this.booksService.loginUser.subscribe((response: object) => {
      this.isUserLogin = response;
    });
  }

  public rentBook(bookId: number): void {
    let bodyRequest = {
      bookId: bookId,
      userId: this.isUserLogin.id,
    };

    this.booksService.postOrder(bodyRequest).subscribe({
      next: () => {
        alert('Book has been successfully rented!');
      },
    });
  }

  public editMode(book: Book): void {
    const config = {
      data: {
        id: book.id,
        title: book.title,
        author: book.author,
        categoryName: book.categoryName,
        quantity: book.quantity,
      },
      height: '410px',
      width: '450px',
    };

    const dialogRef = this.dialog.open(EditModalComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      // this.books = result;
    });
  }
}
