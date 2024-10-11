import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizioneTramaComponent } from './descrizione-trama.component';

describe('DescrizioneTramaComponent', () => {
  let component: DescrizioneTramaComponent;
  let fixture: ComponentFixture<DescrizioneTramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescrizioneTramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrizioneTramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
