import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCardComponent } from './apod-card.component';

describe('ApodCardComponent', () => {
  let component: ApodCardComponent;
  let fixture: ComponentFixture<ApodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
