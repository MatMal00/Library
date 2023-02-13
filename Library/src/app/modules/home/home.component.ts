import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
