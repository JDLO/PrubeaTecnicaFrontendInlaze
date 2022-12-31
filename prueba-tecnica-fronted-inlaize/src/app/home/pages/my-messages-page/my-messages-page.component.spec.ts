import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMessagesPageComponent } from './my-messages-page.component';

describe('MyMessagesPageComponent', () => {
  let component: MyMessagesPageComponent;
  let fixture: ComponentFixture<MyMessagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMessagesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
