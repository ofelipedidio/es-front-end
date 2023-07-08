import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentoresRoutingModule } from './mentores-routing.module';
import { MentoresComponent } from './mentores/mentores.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MentoresModelComponent } from './mentores/mentores-model';

@NgModule({
  declarations: [MentoresComponent, MentoresModelComponent],
  imports: [
    CommonModule,
    MentoresRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MentoresModule {}
