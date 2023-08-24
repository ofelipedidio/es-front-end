import { ProxyModule } from "./proxy/proxy.module";
import { PerfilModule } from "./perfil/perfil.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { HistoricoComponent } from './historico/historico.component';
import { StarRatingComponent } from './historico/star-rating/star-rating.component';
import { TagsModule } from "./tags/tags.module";

@NgModule({
  declarations: [AppComponent, HistoricoComponent, StarRatingComponent],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    PerfilModule,
    ProxyModule,
    TagsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
