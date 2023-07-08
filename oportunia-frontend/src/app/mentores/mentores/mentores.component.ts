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

  mentors = [
    {
      name: 'John Doe',
      role: 'Senior Mentor',
      tags: ['JavaScript', 'Angular', 'Web Development'],
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      tags: ['User Experience', 'Adobe XD', 'Prototyping'],
    },
  ];

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
