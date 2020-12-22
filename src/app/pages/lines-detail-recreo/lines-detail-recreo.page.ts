import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linea } from '../../interfaces/lines.interface';
import { LinesServiceService } from '../../services/lines-service.service';

@Component({
  selector: 'app-lines-detail-recreo',
  templateUrl: './lines-detail-recreo.page.html',
  styleUrls: ['./lines-detail-recreo.page.scss'],
})
export class LinesDetailRecreoPage implements OnInit {

  public linea: Linea;
  constructor(
    private linesService: LinesServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const lineaId: string = this.route.snapshot.paramMap.get('id');
    this.linesService.getLineasDetailRecreo(lineaId).subscribe(linea => {
      this.linea = linea;
    });
  }

}
