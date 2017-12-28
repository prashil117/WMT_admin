import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtavelerComponent } from './addtaveler.component';

describe('AddtavelerComponent', () => {
  let component: AddtavelerComponent;
  let fixture: ComponentFixture<AddtavelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtavelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtavelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
