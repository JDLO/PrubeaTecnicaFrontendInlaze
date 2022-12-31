import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMessageComponentComponent } from './card-message-component.component';

describe('CardMessageComponentComponent', () => {
  let component: CardMessageComponentComponent;
  let fixture: ComponentFixture<CardMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMessageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
