import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArumugamComponent } from './arumugam.component';

describe('ArumugamComponent', () => {
  let component: ArumugamComponent;
  let fixture: ComponentFixture<ArumugamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArumugamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArumugamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
