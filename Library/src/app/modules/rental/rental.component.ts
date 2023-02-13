import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
  books?: Book[];
  title: string = 'Library';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Book[]>('/api/books').subscribe({
      next: (result: Book[]) => {
        this.books = result;
      },
      error: (error: object) => {
        console.log(error);
      },
    });
  }
}
