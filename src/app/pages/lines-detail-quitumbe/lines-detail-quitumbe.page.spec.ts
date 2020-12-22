import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesDetailQuitumbePage } from './lines-detail-quitumbe.page';

describe('LinesDetailQuitumbePage', () => {
  let component: LinesDetailQuitumbePage;
  let fixture: ComponentFixture<LinesDetailQuitumbePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDetailQuitumbePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesDetailQuitumbePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
