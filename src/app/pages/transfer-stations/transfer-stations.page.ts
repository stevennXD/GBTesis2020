import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-stations',
  templateUrl: './transfer-stations.page.html',
  styleUrls: ['./transfer-stations.page.scss'],
})
export class TransferStationsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //metodo para navegar a una pagina
  navigateToLineasQuitumbe(){
    this.router.navigate(['/lines-quitumbe']);
  }

  navigateToLineasRecreo(){
    this.router.navigate(['/lines-recreo']);
  }

  navigateToLineasMagdalena(){
    this.router.navigate(['/lines-magdalena']);
  }

  navigateToLineasLabrador(){
    this.router.navigate(['/lines-labrador']);
  }


}
