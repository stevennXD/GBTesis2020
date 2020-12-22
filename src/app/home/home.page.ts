import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

   //metodo para navegar a una pagina
   navigateToParadas(){
    this.router.navigate(['/transfer-stations']);
  }

}
