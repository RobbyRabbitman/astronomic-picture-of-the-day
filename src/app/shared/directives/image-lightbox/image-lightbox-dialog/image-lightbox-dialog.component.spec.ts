import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLightboxDialogComponent } from './image-lightbox-dialog.component';

describe('ImageLightboxDialogComponent', () => {
  let component: ImageLightboxDialogComponent;
  let fixture: ComponentFixture<ImageLightboxDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLightboxDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLightboxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
