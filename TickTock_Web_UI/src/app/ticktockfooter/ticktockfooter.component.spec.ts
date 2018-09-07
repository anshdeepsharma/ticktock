import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicktockfooterComponent } from './ticktockfooter.component';

describe('TicktockfooterComponent', () => {
  let component: TicktockfooterComponent;
  let fixture: ComponentFixture<TicktockfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicktockfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicktockfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
