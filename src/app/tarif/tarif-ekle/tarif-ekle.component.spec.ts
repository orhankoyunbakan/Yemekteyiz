import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifEkleComponent } from './tarif-ekle.component';

describe('TarifEkleComponent', () => {
  let component: TarifEkleComponent;
  let fixture: ComponentFixture<TarifEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
