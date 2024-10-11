import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizioneNewsComponent } from './descrizione-news.component';

describe('DescrizioneNewsComponent', () => {
  let component: DescrizioneNewsComponent;
  let fixture: ComponentFixture<DescrizioneNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescrizioneNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrizioneNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
