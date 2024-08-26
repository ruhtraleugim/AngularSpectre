import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcComponentComponent} from './first-component.component';

describe('FirstComponentComponent', () => {
  let component: FirstcComponentComponent;
  let fixture: ComponentFixture<FirstcComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstcComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
