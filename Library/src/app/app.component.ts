import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
