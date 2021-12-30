import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCardsComponent } from './cta-cards.component';

describe('CtaCardsComponent', () => {
  let component: CtaCardsComponent;
  let fixture: ComponentFixture<CtaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
