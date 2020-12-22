import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinesLabradorPage } from './lines-labrador.page';

describe('LinesLabradorPage', () => {
  let component: LinesLabradorPage;
  let fixture: ComponentFixture<LinesLabradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesLabradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinesLabradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
