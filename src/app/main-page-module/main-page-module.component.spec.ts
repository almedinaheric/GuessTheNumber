import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageModuleComponent } from './main-page-module.component';

describe('MainPageModuleComponent', () => {
  let component: MainPageModuleComponent;
  let fixture: ComponentFixture<MainPageModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
