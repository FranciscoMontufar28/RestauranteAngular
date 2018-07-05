import { Component } from '@angular/core';

@Component({
  // La estiqueta para usar el compomente
  selector: 'app-root',
  // La ruta del archivo de template
  // templateUrl: './app.component.html',
  // Las rutas de los archivos de estilos
  // styleUrls: ['./app.component.css'],
  // Servicios disponibles a partir de este nivel
  providers: [],
  // No se puede usar template y templateUrl a la vez
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
