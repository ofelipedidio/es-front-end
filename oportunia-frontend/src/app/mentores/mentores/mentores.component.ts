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

  // Mock data for mentors
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
    // Add more mentor objects as needed
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.mentors);
  }

  onButtonClick(mentor: any) {
    // Handle button click event here
    console.log('Button clicked for:', mentor);
  }
}
