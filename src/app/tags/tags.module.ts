import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { RequesttagComponent } from './requesttag/requesttag.component';
import { AdmtagComponent } from './admtag/admtag.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MentoriasRoutingModule } from '../mentorias/mentorias-routing.module';



@NgModule({
  declarations: [
    RequesttagComponent,
    AdmtagComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    
    MatChipsModule,
    NgFor,
    MatIconModule,
    ReactiveFormsModule,
    AsyncPipe,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MentoriasRoutingModule,
    
    ]
})
export class TagsModule { }
