import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesRecreoPage } from './lines-recreo.page';

describe('LinesRecreoPage', () => {
  let component: LinesRecreoPage;
  let fixture: ComponentFixture<LinesRecreoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesRecreoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesRecreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
