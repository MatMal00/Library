import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './shared/models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
