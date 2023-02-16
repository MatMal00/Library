import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss'],
})
export class CreateNewAccountComponent {
  createAccountForm: FormGroup = this._formBuilder.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
  );

  constructor(private _formBuilder: FormBuilder) {}

  get form() {
    return this.createAccountForm.controls;
  }
}
