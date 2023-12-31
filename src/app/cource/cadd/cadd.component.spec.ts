import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddComponent } from './cadd.component';

describe('CaddComponent', () => {
  let component: CaddComponent;
  let fixture: ComponentFixture<CaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
