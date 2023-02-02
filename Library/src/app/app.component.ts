import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public books?: Book[];

  constructor(http: HttpClient) {
    http.get<Book[]>('/api/books').subscribe(
      (result) => {
        this.books = result;
      },
      (error) => console.error(error)
    );
  }

  title = 'Library';
}

interface Book {
  id: number;
  title: string;
  author: string;
  bookDescription: string;
  categoryName: string;
  imageUrl: string;
  isRentable: boolean;
  price: number;
  quantity: number;
}
