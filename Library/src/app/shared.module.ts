import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { EditModalComponent } from './shared/components/edit-modal/edit-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CapitalLetterFirstPipe } from './shared/pipes/capital-letter-first.pipe';

@NgModule({
  declarations: [NavbarComponent, EditModalComponent, CapitalLetterFirstPipe],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports: [NavbarComponent, EditModalComponent, MatInputModule, CapitalLetterFirstPipe],
})
export class SharedModule {}
