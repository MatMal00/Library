import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from 'src/app/shared/models/book.model';
import { BooksService } from 'src/app/shared/services/books.service';
import { Categories } from 'src/app/shared/models/categories.model';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from 'src/app/shared/components/edit-modal/edit-modal.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  books?: Book[];

  categories!: Categories[];

  isUserLogin: any;

  selectFormControl = new FormControl('');

  constructor(private booksService: BooksService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: Book[]) => {
      this.books = result.filter((x: Book) => x.isRentable === true);
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

  public buyBook(bookId: number): void {
    let bodyRequest = {
      bookId: bookId,
      userId: this.isUserLogin.id,
    };

    this.booksService.postOrder(bodyRequest).subscribe({
      next: () => {
        alert('Book has been successfully bought!');
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

    this.dialog.open(EditModalComponent, config);
  }
}
