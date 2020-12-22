import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinesServiceService } from '../../services/lines-service.service';
import { Linea } from '../../interfaces/lines.interface';

@Component({
  selector: 'app-lines-magdalena',
  templateUrl: './lines-magdalena.page.html',
  styleUrls: ['./lines-magdalena.page.scss'],
})
export class LinesMagdalenaPage implements OnInit {

  public lineaList: Observable<Linea[]>;

  constructor(private linesService: LinesServiceService) { }

  ngOnInit() {
    this.lineaList = this.linesService.getLineasListMagdalena();
  }

}
