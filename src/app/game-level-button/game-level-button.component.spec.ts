import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLevelButtonComponent } from './game-level-button.component';

describe('GameLevelButtonComponent', () => {
  let component: GameLevelButtonComponent;
  let fixture: ComponentFixture<GameLevelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLevelButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameLevelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
