import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMessageListComponentComponent } from './card-message-list-component.component';

describe('CardMessageListComponentComponent', () => {
  let component: CardMessageListComponentComponent;
  let fixture: ComponentFixture<CardMessageListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMessageListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMessageListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
