import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;

  loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private _formBuilder: FormBuilder, private _booksService: BooksService) {}

  get form() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      let login = {
        ...this.loginForm.value,
      };

      this._booksService.postAuthenticationLogin(login).subscribe();

      window.localStorage.setItem('user', JSON.stringify(login));
    }
  }
}
