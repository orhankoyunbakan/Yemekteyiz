import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikayelerComponent } from './hikayeler.component';

describe('HikayelerComponent', () => {
  let component: HikayelerComponent;
  let fixture: ComponentFixture<HikayelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikayelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikayelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
