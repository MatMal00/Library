import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _http: HttpClient) {}

  books?: Book[];

  public getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>('/api/books');
  }

  public getOrderStatus(): Observable<any> {
    return this._http.get<any>('/api/OrderStatus');
  }

  public getCategories(): Observable<any> {
    return this._http.get<any>('/api/categories');
  }

  public postAuthenticationLogin(login: any) {
    return this._http.post('/api/auth/login', login);
  }

  public postAuthenticationRegister(newUserAccountValue: any) {
    return this._http.post<any>('/api/auth/register', newUserAccountValue);
  }
}
