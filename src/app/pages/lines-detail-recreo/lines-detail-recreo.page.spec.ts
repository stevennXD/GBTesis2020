import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesDetailRecreoPage } from './lines-detail-recreo.page';

describe('LinesDetailRecreoPage', () => {
  let component: LinesDetailRecreoPage;
  let fixture: ComponentFixture<LinesDetailRecreoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDetailRecreoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesDetailRecreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
