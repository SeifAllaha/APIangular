import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsditComponent } from './csdit.component';

describe('CsditComponent', () => {
  let component: CsditComponent;
  let fixture: ComponentFixture<CsditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
