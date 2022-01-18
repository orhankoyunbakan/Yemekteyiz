import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutfakComponent } from './mutfak.component';

describe('MutfakComponent', () => {
  let component: MutfakComponent;
  let fixture: ComponentFixture<MutfakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutfakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutfakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
