import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuruganParentComponent } from './murugan-parent.component';

describe('MuruganParentComponent', () => {
  let component: MuruganParentComponent;
  let fixture: ComponentFixture<MuruganParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuruganParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuruganParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
