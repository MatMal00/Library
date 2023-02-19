import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Users } from 'src/app/shared/models/users.model';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss'],
})
export class ShoppingBasketComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['imageUrl', 'title', 'author', 'categoryName', 'price', 'actions'];
  dataSource!: MatTableDataSource<Users, MatTableDataSourcePaginator>;

  order!: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, private booksService: BooksService) {}

  public ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.order = response;
      this.dataSource = new MatTableDataSource(this.order);
      this.dataSource.sort = this.sort;
    });
  }

  public announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
