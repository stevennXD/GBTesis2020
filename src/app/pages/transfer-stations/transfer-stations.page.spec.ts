import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferStationsPage } from './transfer-stations.page';

describe('TransferStationsPage', () => {
  let component: TransferStationsPage;
  let fixture: ComponentFixture<TransferStationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferStationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferStationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
