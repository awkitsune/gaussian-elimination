import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelMethodInfoComponent } from './gel-method-info.component';

describe('GelMethodInfoComponent', () => {
  let component: GelMethodInfoComponent;
  let fixture: ComponentFixture<GelMethodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GelMethodInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GelMethodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
