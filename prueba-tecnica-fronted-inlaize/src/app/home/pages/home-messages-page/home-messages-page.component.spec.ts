import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessagesPageComponent } from './home-messages-page.component';

describe('HomeMessagesPageComponent', () => {
  let component: HomeMessagesPageComponent;
  let fixture: ComponentFixture<HomeMessagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMessagesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
