import { Injectable } from '@angular/core';
import { MentoresModel } from './mentores-model';

@Injectable({
  providedIn: 'root',
})
export class MentoresServiceService {
  constructor() {}

  getMentores(): MentoresModel[] {
    const mentors = [
      {
        name: 'John Doe',
        cargo: 'Senior Mentor',
        tags: ['JavaScript', 'Angular', 'Web Development'],
      },
      {
        name: 'Jane Smith',
        cargo: 'UI/UX Designer',
        tags: ['User Experience', 'Adobe XD', 'Prototyping'],
      },
    ];
    return mentors;
  }
}
