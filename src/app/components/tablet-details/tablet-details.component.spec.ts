import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletDetailsComponent } from './tablet-details.component';

describe('TabletDetailsComponent', () => {
  let component: TabletDetailsComponent;
  let fixture: ComponentFixture<TabletDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
