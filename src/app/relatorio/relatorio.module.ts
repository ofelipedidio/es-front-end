import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { MatTableModule } from '@angular/material/table';
import { RelatorioRequestComponent } from './relatorio-request/relatorio-request.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from "@angular/material/card";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RelatorioComponent,
    RelatorioRequestComponent
  ],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class RelatorioModule { }
