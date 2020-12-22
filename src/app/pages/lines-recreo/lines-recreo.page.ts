import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinesServiceService } from '../../services/lines-service.service';
import { Linea } from '../../interfaces/lines.interface';

@Component({
  selector: 'app-lines-recreo',
  templateUrl: './lines-recreo.page.html',
  styleUrls: ['./lines-recreo.page.scss'],
})
export class LinesRecreoPage implements OnInit {

  public lineaList: Observable<Linea[]>;

  constructor(private linesService: LinesServiceService) { }

  ngOnInit() {
    this.lineaList = this.linesService.getLineasListRecreo();
  }

}
