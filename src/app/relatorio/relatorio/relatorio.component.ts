import { Component, OnInit } from '@angular/core';

import { RelatorioModel } from "../../models/relatorio-model";
import { MatTableDataSource } from "@angular/material/table";
import { RelatorioService } from "../../services/relatorio.service";
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit{
  start: number;
  end: number;
  dataSource:  MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ["qtd_usuario", "qtd_mentorias", "taxa_mentorias", "qtd_experiencias", "qtd_abs_experiencias"];

  constructor(private mentoriaService: RelatorioService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    
    this.start = -1;
    this.end = -1;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.start = parseInt(this.route.snapshot.paramMap.get('start') || '0');
    this.end = parseInt(this.route.snapshot.paramMap.get('end') || new Date().getTime().toString());

    this.mentoriaService.getRelatorio(this.start, this.end).subscribe((mentorias) => {
      this.dataSource = new MatTableDataSource(
        RelatorioModel.convertPayload(mentorias)
      );
    });
  }
}
