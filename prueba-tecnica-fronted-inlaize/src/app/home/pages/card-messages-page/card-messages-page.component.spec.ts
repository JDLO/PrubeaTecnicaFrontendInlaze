import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMessagesPageComponent } from './card-messages-page.component';

describe('CardMessagesPageComponent', () => {
  let component: CardMessagesPageComponent;
  let fixture: ComponentFixture<CardMessagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMessagesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
