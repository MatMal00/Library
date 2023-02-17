import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss'],
})
export class CreateNewAccountComponent {
  createAccountForm: FormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private booksService: BooksService) {}

  get form() {
    return this.createAccountForm.controls;
  }

  public createUserSubmit(): void {
    const newUserAccountValue = {
      ...this.createAccountForm.value,
    };

    if (this.createAccountForm.valid) {
      this.booksService.postAuthenticationRegister(newUserAccountValue).subscribe();
    }
  }
}
