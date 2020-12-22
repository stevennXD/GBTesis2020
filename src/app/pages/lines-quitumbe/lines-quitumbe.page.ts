import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinesServiceService } from '../../services/lines-service.service';
import { Linea } from '../../interfaces/lines.interface';

@Component({
  selector: 'app-lines-quitumbe',
  templateUrl: './lines-quitumbe.page.html',
  styleUrls: ['./lines-quitumbe.page.scss'],
})
export class LinesQuitumbePage implements OnInit {

  public lineaList: Observable<Linea[]>;

  constructor(private linesService: LinesServiceService) { }

  ngOnInit() {
    this.lineaList = this.linesService.getLineasListQuitumbe();
  }

}
