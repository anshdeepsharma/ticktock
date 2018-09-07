import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdevicesComponent } from './trackdevices.component';

describe('TrackdevicesComponent', () => {
  let component: TrackdevicesComponent;
  let fixture: ComponentFixture<TrackdevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackdevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackdevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
