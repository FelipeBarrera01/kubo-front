import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormDispositivosPage } from './form-dispositivos.page';

describe('FormDispositivosPage', () => {
  let component: FormDispositivosPage;
  let fixture: ComponentFixture<FormDispositivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDispositivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormDispositivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
