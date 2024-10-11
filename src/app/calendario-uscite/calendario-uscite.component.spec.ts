import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioUsciteComponent } from './calendario-uscite.component';

describe('CalendarioUsciteComponent', () => {
  let component: CalendarioUsciteComponent;
  let fixture: ComponentFixture<CalendarioUsciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarioUsciteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioUsciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
