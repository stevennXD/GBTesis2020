import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinesServiceService } from '../../services/lines-service.service';
import { Linea } from '../../interfaces/lines.interface';

@Component({
  selector: 'app-lines-labrador',
  templateUrl: './lines-labrador.page.html',
  styleUrls: ['./lines-labrador.page.scss'],
})
export class LinesLabradorPage implements OnInit {

  public lineaList: Observable<Linea[]>;

  constructor(private linesService: LinesServiceService) { }

  ngOnInit() {
    this.lineaList = this.linesService.getLineasListLabrador();
  }

}
