import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { CalandarComponent } from './calandar/calandar.component';
import { CompetencesComponent } from './competences/competences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionsComponent } from './missions/missions.component';

import { CarriereComponent } from './carriere/carriere.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    CalandarComponent,
    CompetencesComponent,
    MissionsComponent,
    CarriereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
