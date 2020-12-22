import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesDetailMagdalenaPage } from './lines-detail-magdalena.page';

describe('LinesDetailMagdalenaPage', () => {
  let component: LinesDetailMagdalenaPage;
  let fixture: ComponentFixture<LinesDetailMagdalenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDetailMagdalenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesDetailMagdalenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
