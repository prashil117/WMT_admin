import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittavelerComponent } from './edittaveler.component';

describe('EdittavelerComponent', () => {
  let component: EdittavelerComponent;
  let fixture: ComponentFixture<EdittavelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittavelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittavelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
