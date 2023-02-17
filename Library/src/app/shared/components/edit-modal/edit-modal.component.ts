import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BooksService } from '../../services/books.service';

export interface ModalData {
  id: number;
  title: string;
  author: string;
  categoryName: string;
  quantity: number;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  editForm = this._formBuilder.group({
    title: [`${this.modalValues.title}`],
    author: [`${this.modalValues.author}`],
    categoryName: [`${this.modalValues.categoryName}`],
    quantity: [`${this.modalValues.quantity}`],
  });

  id!: number;

  constructor(
    public dialogRef: MatDialogRef<ModalData>,
    @Inject(MAT_DIALOG_DATA) public modalValues: ModalData,
    private _formBuilder: FormBuilder,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {}

  public deleteBook(bookId: number): void {
    console.log(bookId);
  }

  public save(bookId: number): void {
    console.log(bookId);
  }
}
