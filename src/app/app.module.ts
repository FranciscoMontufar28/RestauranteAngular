import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  //Componentes, Pipes o Directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent
  ],
  //Importamos Modulos
  imports: [
    BrowserModule
  ],
//Servicios (Singleton) disponibles en el modulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent],

  //Componentes, Pipes, Directivas o Servicios se exportan
  exports: []
})
export class AppModule { }
