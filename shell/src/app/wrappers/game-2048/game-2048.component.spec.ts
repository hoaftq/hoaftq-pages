import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2048Component } from './game-2048.component';

describe('Game2048Component', () => {
  let component: Game2048Component;
  let fixture: ComponentFixture<Game2048Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Game2048Component]
    });
    fixture = TestBed.createComponent(Game2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
