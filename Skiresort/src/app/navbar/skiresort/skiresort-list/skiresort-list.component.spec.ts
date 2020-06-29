import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiresortListComponent } from './skiresort-list.component';

describe('SkiresortListComponent', () => {
  let component: SkiresortListComponent;
  let fixture: ComponentFixture<SkiresortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiresortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiresortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
