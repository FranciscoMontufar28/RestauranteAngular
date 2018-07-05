import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  title = 'app';
  data: Menu[] = [];
  loading  = false;

  constructor(service: MenuService, public router: Router, public route: ActivatedRoute) {
    this.loading = true;
    service.loadMenu()
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(x => this.data = x, err => console.log(err));
  }

  showName(menu: Menu) {
    alert(menu.chef);

  }
  goToAdd() {
    this.router.navigate(['agregar'], { relativeTo: this.route });
  }
}
