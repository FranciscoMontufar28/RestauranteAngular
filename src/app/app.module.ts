import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { WeekComponent } from './components/week/week.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: ListPageComponent},
  {path: 'agregar', component: AddPageComponent},
  // {path: 'menu/:id', component: nombre componente}
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  // Componentes, Pipes o Directivas que son visibles en el modulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent, FechaPipe, WeekComponent, ListPageComponent, AddPageComponent, NotFoundComponent
  ],
  // Importamos Modulos
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
// Servicios (Singleton) disponibles en el modulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent],

  // Componentes, Pipes, Directivas o Servicios se exportan
  exports: []
})
export class AppModule { }
