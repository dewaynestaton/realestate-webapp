import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesPreviewComponent } from './homes-preview.component';

describe('HomesPreviewComponent', () => {
  let component: HomesPreviewComponent;
  let fixture: ComponentFixture<HomesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
