import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentoresRoutingModule } from './mentores-routing.module';
import { MentoresComponent } from './mentores/mentores.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MentoresComponent],
  imports: [
    CommonModule,
    MentoresRoutingModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
  ],
})
export class MentoresModule {}
