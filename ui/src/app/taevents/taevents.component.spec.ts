import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaeventsComponent } from './taevents.component';

describe('TaeventsComponent', () => {
  let component: TaeventsComponent;
  let fixture: ComponentFixture<TaeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
