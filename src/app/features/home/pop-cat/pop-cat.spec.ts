import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCat } from './pop-cat';

describe('PopCat', () => {
  let component: PopCat;
  let fixture: ComponentFixture<PopCat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopCat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopCat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
