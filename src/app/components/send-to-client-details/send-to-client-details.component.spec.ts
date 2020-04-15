import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToClientDetailsComponent } from './send-to-client-details.component';

describe('SendToClientDetailsComponent', () => {
  let component: SendToClientDetailsComponent;
  let fixture: ComponentFixture<SendToClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
