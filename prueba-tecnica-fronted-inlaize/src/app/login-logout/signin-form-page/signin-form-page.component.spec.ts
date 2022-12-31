import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFormPageComponent } from './signin-form-page.component';

describe('SigninFormPageComponent', () => {
  let component: SigninFormPageComponent;
  let fixture: ComponentFixture<SigninFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
