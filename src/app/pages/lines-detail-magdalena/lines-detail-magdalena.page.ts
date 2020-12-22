import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Linea } from '../../interfaces/lines.interface';
import { LinesServiceService } from '../../services/lines-service.service';

@Component({
  selector: 'app-lines-detail-magdalena',
  templateUrl: './lines-detail-magdalena.page.html',
  styleUrls: ['./lines-detail-magdalena.page.scss'],
})
export class LinesDetailMagdalenaPage implements OnInit {

  public linea: Linea;
  constructor(
    private linesService: LinesServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const lineaId: string = this.route.snapshot.paramMap.get('id');
    this.linesService.getLineasDetailMagdalena(lineaId).subscribe(linea => {
      this.linea = linea;
    });
  }

}
