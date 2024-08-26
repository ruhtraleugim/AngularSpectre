import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundComponentComponent } from './secund-component.component';

describe('SecundComponentComponent', () => {
  let component: SecundComponentComponent;
  let fixture: ComponentFixture<SecundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecundComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
