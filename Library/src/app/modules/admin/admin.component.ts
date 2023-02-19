import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Users } from 'src/app/shared/models/users.model';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['id', 'firstName', 'lastname', 'email', 'roleName', 'actions'];
  dataSource!: MatTableDataSource<Users, MatTableDataSourcePaginator>;

  users!: Users[];

  constructor(private _liveAnnouncer: LiveAnnouncer, private booksService: BooksService) {}

  public ngOnInit(): void {
    this.booksService.getUsers().subscribe((response: Users[]) => {
      this.users = response;
      this.dataSource = new MatTableDataSource(this.users);
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
