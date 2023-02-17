import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  loginUser = new Subject<object>();

  constructor(private _http: HttpClient) {}

  public getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>('/api/books');
  }

  public getOrderStatus(): Observable<any> {
    return this._http.get<any>('/api/OrderStatus');
  }

  public getCategories(): Observable<Categories[]> {
    return this._http.get<Categories[]>('/api/categories');
  }

  public postAuthenticationLogin(login: object): Observable<Object> {
    return this._http.post<object>('/api/auth/login', login);
  }

  public postAuthenticationRegister(newUserAccountValue: object): Observable<Object> {
    return this._http.post<object>('/api/auth/register', newUserAccountValue);
  }
}
