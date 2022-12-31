import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessagesFormPageComponent } from './home-messages-form-page.component';

describe('HomeMessagesFormPageComponent', () => {
  let component: HomeMessagesFormPageComponent;
  let fixture: ComponentFixture<HomeMessagesFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMessagesFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMessagesFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
