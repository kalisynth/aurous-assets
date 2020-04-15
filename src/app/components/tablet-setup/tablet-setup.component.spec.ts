import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletSetupComponent } from './tablet-setup.component';

describe('TabletSetupComponent', () => {
  let component: TabletSetupComponent;
  let fixture: ComponentFixture<TabletSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
