import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesDetailLabradorPage } from './lines-detail-labrador.page';

describe('LinesDetailLabradorPage', () => {
  let component: LinesDetailLabradorPage;
  let fixture: ComponentFixture<LinesDetailLabradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDetailLabradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesDetailLabradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
