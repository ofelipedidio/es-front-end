import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Relatorio, RelatorioModel } from "../models/relatorio-model";

const baseurl = "/api/relatorio";

@Injectable({
  providedIn: "root",
})
export class RelatorioService {
  constructor(private http: HttpClient) { }

  getRelatorio(start: number,end: number): Observable<Relatorio> {
    return this.http.post<Relatorio>(baseurl, { start: start, end: end });
  }
}