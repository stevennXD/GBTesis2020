import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesQuitumbePage } from './lines-quitumbe.page';

describe('LinesQuitumbePage', () => {
  let component: LinesQuitumbePage;
  let fixture: ComponentFixture<LinesQuitumbePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesQuitumbePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesQuitumbePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
