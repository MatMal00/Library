import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isUserLogin: any;

  constructor(private _booksService: BooksService) {}

  public ngOnInit(): void {
    this.isUserLogin = JSON.parse(window.localStorage.getItem('user') || '{}');

    this._booksService.loginUser.next(this.isUserLogin);
  }

  public signOut(): void {
    this.isUserLogin = window.localStorage.removeItem('user');
    this._booksService.loginUser.next({});
  }
}
