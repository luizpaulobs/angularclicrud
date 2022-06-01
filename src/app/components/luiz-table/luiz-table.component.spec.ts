import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuizTableComponent } from './luiz-table.component';

describe('LuizTableComponent', () => {
  let component: LuizTableComponent;
  let fixture: ComponentFixture<LuizTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuizTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuizTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
