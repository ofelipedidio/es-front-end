// mentors.component.ts

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentores.component.html',
  styleUrls: ['./mentores.component.scss'],
})
export class MentoresComponent {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['nameRole', 'tags', 'action'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.mentors);
  }

  onButtonClick(mentor: any) {
    console.log('Button clicked for:', mentor);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
