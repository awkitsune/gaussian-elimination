import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelCalculatorComponent } from './gel-calculator.component';

describe('GelCalculatorComponent', () => {
  let component: GelCalculatorComponent;
  let fixture: ComponentFixture<GelCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GelCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
