import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  loginUser = new BehaviorSubject<object>({});

  constructor(private _http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>('/api/books');
  }

  public deleteBook(bookId: number): Observable<Book[]> {
    return this._http.delete<Book[]>(`/api/books/${bookId}`);
  }

  public getOrderStatus(): Observable<any> {
    return this._http.get<any>('/api/OrderStatus');
  }

  public getCategories(): Observable<Categories[]> {
    return this._http.get<Categories[]>('/api/categories');
  }

  public postAuthenticationLogin(login: object): Observable<object> {
    return this._http.post<object>('/api/auth/login', login);
  }

  public postAuthenticationRegister(newUserAccountValue: object): Observable<object> {
    return this._http.post<object>('/api/auth/register', newUserAccountValue);
  }

  public postOrder(body: object): Observable<object> {
    return this._http.post<object>('/api/orders', body);
  }
}
