import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaranChildComponent } from './saran-child.component';

describe('SaranChildComponent', () => {
  let component: SaranChildComponent;
  let fixture: ComponentFixture<SaranChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaranChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaranChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
