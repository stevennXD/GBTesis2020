import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesMagdalenaPage } from './lines-magdalena.page';

describe('LinesMagdalenaPage', () => {
  let component: LinesMagdalenaPage;
  let fixture: ComponentFixture<LinesMagdalenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesMagdalenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesMagdalenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
