import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifDetayComponent } from './tarif-detay.component';

describe('TarifDetayComponent', () => {
  let component: TarifDetayComponent;
  let fixture: ComponentFixture<TarifDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
