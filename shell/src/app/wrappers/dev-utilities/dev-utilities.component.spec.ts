import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevUtilitiesComponent } from './dev-utilities.component';

describe('DevUtilitiesComponent', () => {
  let component: DevUtilitiesComponent;
  let fixture: ComponentFixture<DevUtilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevUtilitiesComponent]
    });
    fixture = TestBed.createComponent(DevUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
