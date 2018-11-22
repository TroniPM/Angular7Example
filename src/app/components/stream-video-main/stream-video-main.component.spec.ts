import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamVideoMainComponent } from './stream-video-main.component';

describe('StreamVideoMainComponent', () => {
  let component: StreamVideoMainComponent;
  let fixture: ComponentFixture<StreamVideoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamVideoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamVideoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
