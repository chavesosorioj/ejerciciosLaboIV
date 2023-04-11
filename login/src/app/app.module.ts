import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeliculaComponent } from './Entidades/tabla-pelicula/tabla-pelicula.component';
import { PeliculasComponent } from './Entidades/peliculas/peliculas.component';
import { ActorComponent } from './Entidades/actor/actor.component';
import { HijoComponent } from './Entidades/hijo/hijo.component';
import { PadreComponent } from './Entidades/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculaComponent,
    PeliculasComponent,
    ActorComponent,
    HijoComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
